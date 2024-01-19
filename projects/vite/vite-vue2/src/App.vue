<template>
  <div>
    <Hello></Hello>
    <div>{{ text }}</div>
  </div>
</template>

<script>
import Hello from "../components/Hello.vue"

export default {
  components: { Hello },
  data() {
    return {
      text: 'Design by vue2'
    }
  }
}
</script>
