<script setup lang="ts">
useSeoMeta({
  title: 'KIPPU-Blog:（＞ ＜）こちらは切符です'
})
</script>


<template>
  <div class="">
    <NuxtLayout>
     <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import "tailwindcss";

.page-enter-active,
.page-leave-active {
  transition: all 0.5s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>