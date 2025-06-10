<template>
  <div class="app">
    <h1>PDF预览测试</h1>
    <PdfPreview :fileUrl="pdfUrl" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PdfPreview from './components/PdfPreview.vue'
import './assets/main.css'

const pdfUrl = ref('/sample.pdf')
</script>

<style>
.app {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
