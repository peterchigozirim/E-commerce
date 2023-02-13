<template>
    <!-- <div class="py-32">
        <div class="max-w-6xl mx-auto w-11/12 md:w-auto grid grid-cols-3 gap-8">
            <div class="rounded h-96">
                <img :src="product.productData.image" :alt="product.productData.title" class="h-full w-full">
            </div>
            <div class="col-span-2 first-letter:capitalize space-y-10 divide-y-2">
                <div class="space-y-6">
                    <div class="font-semibold text-lg">
                        <p>{{ product.productData.title }}</p>
                    </div>
                    <div class="font-semibold">
                        <p>${{ product.productData.price }}</p>
                    </div>
                    <div>
                        <p>{{ product.productData.description }}</p>
                    </div>
                    <div class="font-semibold capitalize">
                        <p>sold: {{ product.productData.rating.count }}</p>
                    </div>
                </div>
                <div class="space-y-2 py-2">
                    <div class="flex justify-between font-semibold">
                        <div>
                            <p>Subtotal</p>
                        </div>
                        <div class="">
                            <p>${{ product.productData.price }}</p>
                        </div>
                    </div>
                    <div>Shipping and taxes calculated at checkout.</div>
                    <div @click="payment()" class="h-10 cursor-pointer flex items-center justify-center bg-green-800 hover:bg-green-400 text-white font-semibold capitalize">
                        <p>buy</p>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script setup>
import { onBeforeMount, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { productStore } from '../../stores/ProductStore';
import { userStore } from '../../stores/UserStore'

    const router = useRouter()
    const product = productStore()
    const userData = userStore()
    

    const payment = () =>{
        if (userData.user == null) {
            router.push({name: 'login'})
        } else {
            alert(hi)
        }
    }
</script>

<style scoped>

</style>