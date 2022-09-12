<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>maiaH5.saveImageToAlbum</h1>
  <div>
    base64: <br />
    <input type="text" v-model="value" />
  </div>
  <button @click="toSaveAlbum"></button>
</template>

<script setup>
export default {
  data() {
    return {
      value:''
    }
  },
  methods: {
    toSaveAlbum() {
      const t = this
      maiaH5.saveImageToAlbum({
        base64: this.value,
        callback: function callback(res) {
          const tips = {
            0: '图片保存成功',
            1001: '无法获取保存权限，请在设置中开启',
            1002: '无法获取保存权限，请在设置中开启'
          }
          alert(tips[res.status] ?? res.message)
        }
      })
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
