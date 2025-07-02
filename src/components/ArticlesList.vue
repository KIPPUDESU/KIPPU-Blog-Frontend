<template>
<div 
class="
flex flex-wrap justify-center items-center
w-full h-full
">
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
    <!-- 分页按钮 -->
    <div 
    class="relative flex justify-center w-full h-46">
        <div 
        class="
        transition-all duration-600 ease-in-out
        absolute -top-2 px-18 hover:px-16
        flex justify-between items-center w-full h-42"
        >
            <!-- 左 -->
            <div 
            class="relative flex py-2 px-4 w-56 h-12
            hover:py-2 hover:w-54 hover:h-13
            text-[18px] text-gray-700
            hover:text-[20px] hover:text-gray-600
            bg-gradient-to-bl from-pink-300/30 to-white/30
            hover:from-pink-200/40 hover:to-white
            transition-all duration-500 ease-in-out
            justify-center items-center font-medium"
            :class="ChengeStore.PlaneOrSolid?
            'shadow-black/20 shadow-none hover:shadow-black/20 hover:shadow-md rounded-none' : 
            'shadow-black/20 shadow-xs hover:shadow-black/20 hover:shadow-md rounded-lg ring-4 ring-pink-200/50'"
            >
            <!-- :to="`/?page=${pageNum - 1}`" -->
            <button @click="subPage" class="flex flex-nowrap w-full h-full items-center gap-3"
            >
            <!-- ← ← ← -->
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                <g transform="scale(-1,1) translate(-16,0)">
                    <polyline 
                    points="4,2 12,8 4,14" 
                    fill="none" 
                    stroke="gray" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"/>
                </g>
                </svg>
            上一页</button>
            </div>
            <!-- 占位分隔图片 -->
            <div 
            class="
            flex justify-center w-max h-full">
            <img
            class="h-full"
            src="../public/img/egutenshi.png" alt="">
            </div>
            <!-- 右 -->
            <div 
            class="relative flex w-56 h-12
            hover:w-54 hover:h-13
            text-[18px] text-gray-700 overflow-hidden
            hover:text-[20px] hover:text-gray-600
            bg-gradient-to-bl from-pink-300/30 to-white/30
            hover:from-pink-200/40 hover:to-white
            transition-all duration-500 ease-in-out
            justify-center items-center font-medium"
            :class="ChengeStore.PlaneOrSolid?
            'shadow-black/20 shadow-none hover:shadow-black/20 hover:shadow-md rounded-none' : 
            'shadow-black/20 shadow-xs hover:shadow-black/20 hover:shadow-md rounded-lg ring-4 ring-pink-200/50'"
            >
            <!-- :to="`/?page=${pageNum + 1}`" -->
            <button @click="addPage" 
            class="
            z-50 flex flex-nowrap w-full h-full
            items-center gap-3 "
            >下一页 
            <!-- → → → -->
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" height="16" 
                viewBox="0 0 16 16">
                    <polyline 
                    points="4,2 12,8 4,14" 
                    fill="none" 
                    stroke="gray" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"/>
                </svg>
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