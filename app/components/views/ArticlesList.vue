<template>
<div 
class="
flex flex-col justify-between items-center
w-full h-full">
    <!-- 翻页动画容器 -->
    <Transition :name="isNextPage ? 'fade-left' : 'fade-right'" mode="out-in">
        <div
        v-if="!articlesPending"
        :key="PageNum"
        class="
        transition-all duration-800 ease-in-out
        flex flex-wrap w-full justify-center
        "
        :class="isIre ? 'opacity-100' : 'opacity-0' "
        >
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
        <div
        v-else
        key="skeleton"
        class="
        transition-all duration-800 ease-in-out
        flex flex-wrap w-full justify-center
        "
        :class="isIre ? 'opacity-100' : 'opacity-0' "
        >
            <ArticleCardSkeleton v-for="i in MaxArticleCard" :key="i" />
        </div>
    </Transition>
        <!-- 分页按钮 -->
        <!-- 使用双重否定 !! 将表达式强制转换为一个严格的布尔值 -->
        <ArticlePaginator
          :PageNum="PageNum"
          @subPage="subPage"
          @addPage="addPage"
        />
</div>
</template>

<script setup lang="ts">
// 全局状态管理
import { useTestStore } from '#imports'

// 把useTestStore存入ChengeStore
const ChengeStore = useTestStore()

// 动画
const isNextPage = ref<boolean>(true)
const isIre = ref<boolean>(false)

onMounted(() => {
  setTimeout(() => {
    isIre.value = true
  },50)
})

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
const { data: articles, refresh: refreshArticles, pending: articlesPending } =
useAsyncData(
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
useAsyncData(
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
        isNextPage.value = false
    }
}
function addPage() {
    // 数组长度大于零才启用
    if ( haveNextPage.value && haveNextPage.value.length > 0 ) {
        PageNum.value++
        isNextPage.value = true
    }
}

// 页面变化启动启动两个 refresh 重启查询
watch(PageNum, () => {
    refreshArticles()
    refreshHaveNextPage()
})
</script>

<style scoped>
.fade-left-enter-active,
.fade-left-leave-active {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.fade-left-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-left-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.fade-right-enter-active,
.fade-right-leave-active {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.fade-right-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.fade-right-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>

