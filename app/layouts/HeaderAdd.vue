<template>
<div 
class="
 transition-all duration-600 linear
 absolute z-20 -top-12 flex w-full justify-between"
:class="ChengeStore.PlaneOrSolid ?
 'h-94 bg-gray-100':
 'h-12 bg-gray-300/20'" 
 >
</div>
</template>

<script setup lang="ts">
// 全局
import { useTestStore } from '#imports'
const ChengeStore = useTestStore()

</script>