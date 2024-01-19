<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://v2.cn.vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="../assets/typescript.svg" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript + {{ message }}</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue2'
    }
  }
}
</script>
