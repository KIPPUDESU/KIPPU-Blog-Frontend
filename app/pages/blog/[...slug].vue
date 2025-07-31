<template>
  <main 
  class="
  bg-gray-100 py-12 sm:py-18">
    <div 
    class="
    mx-auto max-w-14/20">
      <div 
      class="
      bg-pink-50 rounded-2xl shadow-lg shadow-black/20
      overflow-hidden">
        <div 
        class="
        flex relative h-92 w-full overflow-hidden">
          <img 
          :src="page?.image" 
          alt="Article Cover Image" 
          class="w-full h-full object-cover">
          <!-- 一层黑色遮罩 -->
          <div 
          class="
          absolute w-full h-full 
          backdrop-blur-none bg-black/40
          shadow-[inset_0_-5px_6px_rgba(0,0,0,0.1)]
          ">
            <div 
            class="
            relative flex flex-col w-full h-40 
            mt-36 px-14 gap-2
            ">
              <!-- 文章标题 -->
              <h1 class="text-[40px] text-white font-bold">{{ page?.title }}</h1>
              <div class="relative flex flex-row w-full h-1/5 gap-6">
                <!-- 发布日期 -->
                <div class="flex gap-2 justify-center items-center h-full w-max">
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  xmlns:xlink="http://www.w3.org/1999/xlink" 
                  viewBox="0 0 24 24"
                  class="text-gray-300 w-6">
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" fill="currentColor">
                    </path>
                  </svg>
                  <span class=" text-[20px] text-gray-300">
                    发布日期：{{ page?.date }}</span>
                </div>
                <!-- 阅读时长 -->
                <div class="flex gap-2 justify-center items-center h-full w-max">
                  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  xmlns:xlink="http://www.w3.org/1999/xlink" 
                  viewBox="0 0 24 24"
                  class="text-gray-300 w-6">
                  <path d="M22 5.72l-4.6-3.86l-1.29 1.53l4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86L2 5.71l1.29 1.53l4.59-3.85zM12.5 8H11v6l4.75 2.85l.75-1.23l-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z" fill="currentColor">
                  </path></svg>
                  <span class=" text-[20px] text-gray-300">
                    阅读时长：{{  page?.readingTime }} 分钟</span>
                </div>
              </div>
            </div>
          <!-- <h1>{{ page?.title }}</h1> -->
          </div>
        </div>
        <!-- markdown -->
        <div class="px-16 py-10">
          <article v-if="page" 
          class="prose prose-a:no-underline max-w-none">
            <ContentRenderer :value="page" />
          </article>
          <p v-else>页面不存在或正在加载…</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, watch, nextTick } from 'vue';

const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

const copyIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" fill="currentColor"></path></svg>`;
const copiedIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z" fill="currentColor"></path></svg>`;

// 封装
function addCopyButtons() {
  // 调用 nextTick 等待DOM更新完成。
  // 因为 <ContentRenderer> 渲染内容是异步，直接调用可能 dom 不存在
  nextTick(() => {
    // 查找带有 .prose 类的元素存入文章
    const article = document.querySelector('.prose');
    if (!article) return

    // 查找所有 <pre> 标签存入代码块
    const codeBlocks = article.querySelectorAll('pre');

    // 对里面的每一个元素，都执行一遍
    codeBlocks.forEach(block => {
      // 哨兵防止重复添加按钮
      if (block.querySelector('.Copy-Button')) {
        return;
      }

      const codeText = block.querySelector('code');
      if (!codeText) return;

      // 代码复制按钮
      const button = document.createElement('button');
      button.innerHTML = copyIconSVG;
      button.className = 'Copy-Button';

      // 添加点击事件
      button.addEventListener('click', () => {
        // 使用 navigator.clipboard API 复制代码文本
        // .innerText 会获取文本内容，自动忽略掉所有的 HTML
        navigator.clipboard.writeText(codeText.innerText).then(() => {
          button.innerHTML = copiedIconSVG
          setTimeout(() => {
            button.innerHTML = copyIconSVG
          }, 2000)
        })
        .catch(err => {
          console.error('F**k copy', err)
        })
      })

      // 将按钮添加到<pre>元素中
      block.appendChild(button);
    });
  });
}

// 组件挂载时执行
onMounted(addCopyButtons);

// 监听文章数据变化，当切换文章时重新执行
watch(page, addCopyButtons);
</script>

<style scoped>
.prose :deep(h1:first-of-type) {
    display: none;
}

/* 移除紧跟在被隐藏的 H1 后面的元素的上边距，消除多余的空白 */
.prose :deep(h1:first-of-type + *) {
    margin-top: 0;
}

/* 为行内代码块（`code`）添加背景色和内边距，形成“色块”效果。 */
/* 使用 :not(pre) > code 选择器，确保样式只应用于行内代码， */
/* 而不会影响到 <pre> 标签包裹的多行代码块。 */
.prose :deep(:not(pre) > code) {
  background-color: #fbcfe8; /* Tailwind's bg-pink-200 */
  color: #831843;            /* Tailwind's text-pink-900 */
  font-weight: 400;
  padding: 0.125rem 0.375rem;
  border-radius: 0.375rem;
}


/* 移除 Tailwind Typography (`prose`) 插件为行内代码块自动添加的前后反引号。 */

.prose :deep(:not(pre) > code::before),
.prose :deep(:not(pre) > code::after) {
  content: '';
}

/*
  为<pre>代码块容器设置样式。
*/
.prose :deep(pre) {
  position: relative;
  background-color: #e5e7eb; /* gray-200 */
  padding: 1.5rem; /* 对应 prose-pre:py-6 prose-pre:px-6 */
}

/*
  复制按钮的样式。
  默认情况下是透明的，只有当鼠标悬停在代码块上时才显示。
*/
.prose :deep(.Copy-Button) {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  padding: 0.5rem; /* 调整内边距以适应图标 */
  border-radius: 0.375rem;
  background-color: #e5e7eb; /* gray-200 */
  color: #4b5563; /* gray-600 */
  border: 1px solid #d1d5db; /* gray-300 */
  cursor: pointer;
  opacity: 0;
  /* 添加背景色过渡效果 */
  transition: opacity 0.2s ease-in-out, background-color 0.2s ease-in-out;
  display: flex; /* 使用flex布局来居中SVG */
  align-items: center;
  justify-content: center;
}

/*
  设置按钮内SVG图标的大小
*/
.prose :deep(.Copy-Button svg) {
  width: 1rem;
  height: 1rem;
}


/*
  当鼠标悬停在<pre>代码块上时，显示复制按钮。
*/
.prose :deep(pre:hover .Copy-Button) {
  opacity: 1;
}

/*
  当鼠标悬停在复制按钮上时，改变背景色以提供反馈。
*/
.prose :deep(.Copy-Button:hover) {
  background-color: #d1d5db; 
}
</style>
