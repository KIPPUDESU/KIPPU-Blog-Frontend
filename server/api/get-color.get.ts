import sharp from 'sharp'
import { defineEventHandler, getQuery } from 'h3'

const colorCache = new Map<string, string>()

export default defineEventHandler(async (event) => {
  const { imageUrl } = getQuery(event)

  if (!imageUrl || typeof imageUrl !== 'string') {
    return { error: 'Image URL is required' }
  }

  if (colorCache.has(imageUrl)) {
    return { color: colorCache.get(imageUrl) }
  }

  try {
    const imageBuffer = await fetch(imageUrl).then(res => res.arrayBuffer())

    const { data, info } = await sharp(Buffer.from(imageBuffer))
      .resize(50, 50, { fit: 'cover' })
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    let bestColor = { r: 128, g: 128, b: 128 };
    let maxScore = -1;

    for (let i = 0; i < data.length; i += info.channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // 防御性检查
      // 如果任何一个颜色分量无效，就跳过这个像素
      if (r === undefined || g === undefined || b === undefined) {
        continue;
      }

      if (r > 245 && g > 245 && b > 245) continue;
      if (r < 10 && g < 10 && b < 10) continue;

      const [h, s, l] = rgbToHsl(r, g, b);
      const score = s * 0.7 + l * 0.3;

      if (score > maxScore) {
        maxScore = score;
        bestColor = { r, g, b };
      }
    }
    
    const { r, g, b } = bestColor;
    const colorHex = '#' + [r, g, b].map(c => c.toString(16).padStart(2, '0')).join('');

    colorCache.set(imageUrl, colorHex)
    return { color: colorHex }

  } catch (error) {
    console.error(`Failed to process image: ${imageUrl}`, error)
    return { error: 'Failed to process image', color: '#5a67d8' }
  }
})

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255, g /= 255, b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0, l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h, s, l];
}
