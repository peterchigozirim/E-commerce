<template>
    <div class="bg-gray-100">
      <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
        
  
        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="product in products.productList" :key="product.id" class="group relative bg-white p-2">
            <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
              <img :src="product.image" :alt="product.tittle" class="h-full bg-blend-normal w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 space-y-4">
              <div>
                <div @click="getProduct(product.id)">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.title }}
                </div>
              </div>
              
              <div class="flex justify-between text-sm">
                <div>
                  <p class="text-gray-500">Count: {{ product.rating.count }}</p>
                </div>
                <div>
                  <p class="font-medium text-gray-900">${{ product.price }}</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { RouterLink, useRouter } from 'vue-router'
  import { productStore } from '../../stores/ProductStore';

  const router = useRouter()
  const products = productStore()

  const getProduct = (id)=>{ 
    products.getProductById(id)
  }

  
  </script>