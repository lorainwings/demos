<template>
  <div class="about">
    <h1>这是About主页</h1>
    <div>
      <ul>
        <li>- 山清水秀</li>
        <li>- 秀色可餐</li>
        <li>- 峰峦叠嶂</li>
      </ul>
    </div>
    <div class="img-content">
      <div v-for="(u, i) in imgList" :key="u.id" class="item">
        <div>
          <img width="200" height="300" :src="u.download_url" alt="" />
        </div>
        <div>作者: {{ u.author }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: []
    }
  },
  methods: {
    async getImgList() {
      this.imgList = await fetch(
        'https://picsum.photos/v2/list?page=2&limit=30'
      ).then((r) => r.json())
    }
  },
  mounted() {
    this.getImgList()
  }
}
</script>

<style>
.about {
  overflow-x: hidden;
}

.img-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.item {
  margin: 5px;
  flex: 1;
}
</style>
