<template>
  <div class="home">
    <h1>这是home主页</h1>
    <div>
      <ul>
        <li>- Lorem ipsum dolor home</li>
        <li>- Lorem ipsum dolor home</li>
        <li>- Lorem ipsum dolor home</li>
      </ul>
    </div>
    <div>
      <img
        v-for="(item, i) in 10"
        :src="`https://picsum.photos/200/300?random=${item}`"
      />
    </div>
  </div>
</template>

<script></script>

<style></style>
