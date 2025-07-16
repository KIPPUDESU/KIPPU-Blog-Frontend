<template>
<div 
class="
 transition-all duration-600 linear
 absolute z-20 flex w-full justify-between backdrop-blur-lg"
:class="ChengeStore.PlaneOrSolid ?
 'h-106 bg-gray-100':
 'h-12 bg-gray-300/0'" 
 >
</div>
</template>

<script setup lang="ts">
// 全局
import { useTestStore } from '#imports'
const ChengeStore = useTestStore()

</script>