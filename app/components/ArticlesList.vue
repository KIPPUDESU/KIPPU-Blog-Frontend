<template>
<div 
class="
flex flex-col justify-center items-center
w-full h-full
">
    <div 
    class="
    transition-all duration-600 ease-in-out
    flex flex-wrap w-full justify-center 
     h-8/10"
    :class="ChengeStore.PlaneOrSolid?
    'pt-2' : 'pt-6' ">
        <ArticleCard
        v-for="article in articles"
        :key="article.id"
        :card="{
        date: article.date,
        image: article.image || '/img/egudown.png',
        title: article.title,
        classify: article.classify || '未分类', 
        path: article.path,
        }"
        :PlaneOrSolid="ChengeStore.PlaneOrSolid"
        :to="`/`"
        />
    </div>
        <!-- 分页按钮 -->
        <div 
        class="
        relative flex justify-center w-full h-2/10">
            <div 
            class="
            transition-all duration-600 ease-in-out
            absolute pb-12 pt-4 px-18 hover:px-16
            flex justify-between items-center w-full h-full"
            >
                <!-- 左 -->
                <div 
                class="
                transition-all duration-500 ease-in-out
                relative flex w-56 h-12
                hover:w-54 hover:h-13">
                    <button 
                    @click="subPage" 
                    class="
                    transition-all duration-500 ease-in-out
                    flex flex-nowrap w-full h-full 
                    items-center justify-center 
                    text-[18px] text-blue-300 font-bold
                    hover:text-[20px] hover:text-gray-500
                    bg-gradient-to-bl from-pink-300/30 to-white shadow-black/20
                    hover:from-pink-200/40 hover:shadow-lg
                    cursor-pointer gap-3 hover:gap-4
                    ring-4 ring-pink-200/50"
                    :class="ChengeStore.PlaneOrSolid?
                    'shadow-none rounded-none' : 
                    'shadow-md rounded-lg'"
                    >
                        <!-- ← ← ← -->
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlns:xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 256 512"
                        class="w-3">
                            <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" fill="currentColor">
                            </path>
                        </svg>
                    上一页</button>
                </div>
                <!-- 占位分隔图片 -->
                <div 
                class="
                flex justify-center w-max h-full">
                <img
                class="h-full"
                src="/img/egutenshi.png" alt="">
                </div>
                <!-- 右 -->
                <div 
                class="
                transition-all duration-500 ease-in-out
                relative flex w-56 h-12
                hover:w-54 hover:h-13">
                    <button 
                    @click="addPage" 
                    class="
                    transition-all duration-500 ease-in-out
                    flex flex-nowrap w-full h-full 
                    items-center justify-center 
                    text-[18px] text-blue-300 font-bold
                    hover:text-[20px] hover:text-gray-500
                    bg-gradient-to-bl from-pink-300/30 to-white shadow-black/20
                    hover:from-pink-200/40 hover:shadow-lg
                    cursor-pointer gap-3 hover:gap-4
                    ring-4 ring-pink-200/50"
                    :class="ChengeStore.PlaneOrSolid?
                    'shadow-none rounded-none' : 
                    'shadow-md rounded-lg'"
                    >下一页 
                    <!-- → → → -->
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        xmlns:xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 256 512"
                        class="w-3">
                        <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4l-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" fill="currentColor">
                        </path></svg>
                    </button>
                </div>
            </div>
        </div>
</div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
// 全局状态管理
import { useTestStore } from '#imports'

// 把useTestStore存入ChengeStore
const ChengeStore = useTestStore()

// 卡片渲染数据获取(异步)
const MaxArticleCard = 12

// const PageNum = ref(1)
// 替换为haruki的更安全的类型(~~有必要吗~~)
const PageNum = ref(
    (() => {
        const PageNum = (0)
        // 保证分页数始终为合法非负数
        if ( PageNum < 0 ) {
            return 0
        }
        return PageNum
    })()
)


// const { data: articles } = await useAsyncData('article', () => queryContent('blog').find())
// 以上编写中，最新的 Nuxt Content v3 已经不再提供 queryContent() 
// 改用基于「集合（collection）」的新 API：
// const { data: articles } = 
// await useAsyncData('article', () => 
// // 目标是在 nuxt.config 里定义的 blog
// // .all() 把集合里所有文档取出来
// queryCollection('blog').all()
// )

// 返回值：refresh/execute：可用于刷新函数返回的数据的函数
const { data: articles, refresh: refreshArticles } =
await useAsyncData(
    `articles-page-${PageNum.value}`,
    () => queryCollection('blog')
    // sql风格
    .order('date', 'DESC')
    .limit(MaxArticleCard)
    .skip( PageNum.value * MaxArticleCard )
    .all()
)

// 检测本页过后是否依旧有文章存在
const { data: haveNextPage, refresh: refreshHaveNextPage } =
await useAsyncData(
    `articles-haveNext-${PageNum.value}`,
    () => queryCollection('blog')
    .order('date', 'DESC')
    .skip( (PageNum.value + 1 ) * MaxArticleCard )
    .limit(1)
    .select('title')
    .all()
)

// 加减方法
function subPage() {
    if ( PageNum.value > 0 ) {
        PageNum.value--
    }
}
function addPage() {
    // 数组长度大于零才启用
    if ( haveNextPage.value && haveNextPage.value.length > 0 ) {
        PageNum.value++
    }
}

// 页面变化启动启动两个 refresh 重启查询
watch(PageNum, () => {
    refreshArticles()
    refreshHaveNextPage()
})
</script>