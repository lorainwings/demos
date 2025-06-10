<template>
  <div class="pdf-preview">
    <PDF :src="fileUrl" @error="handlePdfError" style="overflow: auto" @touchmove="handleTouchMove" />
  </div>
</template>

<script setup lang="ts">
import PDF from 'pdf-vue3'

defineProps({
  fileUrl: String
})

function handlePdfError(error: ErrorEvent) {
  console.error('PDF加载失败：', error)
  alert('PDF加载失败，请检查网络或文件地址。')
}

function handleTouchMove(e: Event) {
  e.stopPropagation() // 确保触摸事件传播到子容器
}
</script>

<style scoped lang="scss">
.pdf-preview {
  height: 100%;
  padding: 4px;
}
</style>
