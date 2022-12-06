<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import PageNav from './components/Utility/PageNav.vue';
import { productStore } from '@/stores/ProductStore';
import { userStore } from './stores/UserStore';


  const product = productStore()
  const auth = userStore()
  onMounted(() => {
    product.fetchProdct()
    auth.int()
})
</script>

<template>
  <header class="sticky top-0 z-50">
    <PageNav />
  </header>

  <RouterView />
</template>

<style scoped>

</style>
