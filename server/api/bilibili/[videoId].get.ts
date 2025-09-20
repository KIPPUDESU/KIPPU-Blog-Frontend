import { ofetch } from 'ofetch'
import * as cheerio from 'cheerio'

export default defineEventHandler(async (event) => {
  const videoId = getRouterParam(event, 'videoId')

  if (!videoId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Video ID is required',
    })
  }

  try {
    const url = `https://www.bilibili.com/video/${videoId}`
    // const html = await ofetch(url)
    // 用 ofetch 获取 HTML 内容
    const html = await ofetch(url, { responseType: 'text' })
    // 然后用 cheerio 解析 HTML
    const $ = cheerio.load(html)

    const title = $('title').text().replace(/_哔哩哔哩_bilibili$/, '').trim()
    const description = $('meta[name="description"]').attr('content') || ''
    const coverUrl = $('meta[property="og:image"]').attr('content') || ''

    // 清理URL，去掉可能存在的@参数
    const cleanedCoverUrl = coverUrl ? coverUrl.split('@')[0] : ''

    // Bilibili 的封面 URL 可能不包含协议头，需要补充
    const finalCoverUrl = (cleanedCoverUrl ?? '').startsWith('//') ? `https:${cleanedCoverUrl}` : cleanedCoverUrl

    return {
      id: videoId,
      title,
      description,
      coverUrl: finalCoverUrl,
      url,
    }
  } catch (error) {
    // console.error(`Failed to fetch Bilibili video info for ${videoId}:`, error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch video information',
    })
  }
})
