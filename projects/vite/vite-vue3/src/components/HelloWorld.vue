<script setup lang="ts">
import { ref } from 'vue'
import css from "@styles/index.module.css"
import "@styles/com.scss"


defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div style="border: 1px solid black; margin-bottom: 20px;">
    <h1>HelloWorld.vue</h1>

    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <p :class="`${css.moduleClass} text`">
        Edit
        <code>components/HelloWorld.vue</code> to test HMR
      </p>
    </div>

    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
      starter
    </p>
    <p>
      Install
      <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
      in your IDE for a better DX
    </p>
    <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

    <button class="btn">测试按钮样式</button>

    <div class="alias">这是em元素, 测试resolve.alias导入的样式</div>


    <ul class="sass-block">
      <li class="li-1">1</li>
      <li class="li-2">2</li>
      <li class="li-3">3</li>
      <li class="li-4">4</li>
    </ul>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
