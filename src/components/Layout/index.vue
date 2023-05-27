<template>
  <div class="layout">
    <Header></Header>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Header from '../Header/index.vue';
</script>
