<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <button style="height: 50px; background: #1ab394">
    点击按钮
  </button>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
