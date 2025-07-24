<template>
  <div class="w-38/40 h-58/60">
    <div class="flex flex-wrap justify-center w-full aspect-square">
      <div
      v-for="{item, idx} in classify"
      class="w-80 h-80 m-4 rounded-lg bg-pink-400"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const classify = ref([
  { name: '', src: ''},
  { name: '', src: ''},
  { name: '', src: ''},
  { name: '', src: ''},
  { name: '', src: ''},
  { name: '', src: ''},
  { name: '', src: ''},
  { name: '', src: ''},
  { name: '', src: ''},
])
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
