<template>
  <NuxtLink :to="`https://github.com/${share.link}`" target="_blank" 
    class="transition-all duration-300 ease-in-out group block p-4 rounded-lg bg-white hover:bg-gray-50 border border-gray-200">
    <div class="flex items-center">
      <span class="font-medium text-blue-600 group-hover:underline">{{ share.repo }}</span>
    </div>
    <p class="text-sm text-gray-700 mt-2">{{ share.description }}</p>
    <div class="flex items-center text-sm text-gray-500 mt-3">
      <span class="flex items-center">
        <span class="w-3 h-3 rounded-full mr-1.5" :style="{ backgroundColor: languageColor }"></span>
        <span>{{ share.language }}</span>
      </span>
      <span class="flex items-center ml-4">
        <svg class="w-4 h-4 mr-1" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
        </svg>
        <span>{{ stars }}</span>
      </span>
      <span class="flex items-center ml-4">
        <svg class="w-4 h-4 mr-1" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
        </svg>
        <span>{{ forks }}</span>
      </span>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  share: {
    repo: string;
    link: string;
    description: string;
    language: string;
  }
}>()

const stars = ref(0)
const forks = ref(0)

onMounted(async () => {
  if (props.share.link) {
    try {
      const data = await $fetch(`/api/github/${props.share.link}`)
      stars.value = data.stars ?? 0
      forks.value = data.forks ?? 0
    } catch (error) {
      console.error('Failed to fetch GitHub data:', error)
    }
  }
})

const languageColor = computed(() => {
  const colors: { [key: string]: string } = {
    TypeScript: '#4576BF',
    JavaScript: '#EDE070',
    Python: '#4570A0',
    Java: '#b07219',
    HTML: '#603694',
    CSS: '#563d7c',
    Vue: '#64B686',
    Shell: '#89e051',
    C: '#555555',
    default: '#a97bff'
  }
  return colors[props.share.language] || colors.default
})
</script>