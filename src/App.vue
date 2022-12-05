<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PageNav from './components/Utility/PageNav.vue';
</script>

<template>
  <header>
    <PageNav />
  </header>

  <RouterView />
</template>

<style scoped>

</style>
