<template>
    <div class="w-full">
        <div class="w-full bg-green-900">
            <div class="max-w-6xl mx-auto w-11/12 flex text-xs md:text-sm items-center justify-between h-8 text-white/90  md:w-full">
                <div class="flex h-full items-center gap-2">
                    <p><i class="ri-phone-line text-base"></i></p>
                    <p>
                        +234-8109726010
                    </p>
                </div>
                <div class="capitalize">
                    <p>Get 50% off selected items  |  Shop Now</p>
                </div>
                <div class="hidden md:block">
                    <p>lang</p>
                </div>
            </div>
        </div>
        <div class="w-full" :class="bg">
            <div class="max-w-6xl mx-auto w-11/12 flex text-sm items-center justify-between h-12 md:w-full">
                <div>
                    <p>Logo</p>
                </div>
                <div class="hidden md:block">
                    <ul class="flex gap-4 items-center capitalize font-semibold">
                        <li>
                            <RouterLink to="" class="hover:text-green-800">categories</RouterLink>
                        </li>
                        <li>
                            <RouterLink to="" class="hover:text-green-800">products</RouterLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul class="flex gap-4 items-center capitalize font-semibold">
                        <li class="md:inline-block hidden">
                            <div class="rounded h-8 items-center flex transition-all duration-500 bg-gray-100">
                                <input type="text" placeholder="Search" class="border-none px-2 focus:outline-none h-full bg-transparent  focus:ring-0 focus:border-0">
                                <button  class="h-full px-2 "><i class="ri-search-line"></i></button>
                            </div>
                        </li>
                        <li>
                            <RouterLink to="" class="hover:text-green-800 relative"><i class="ri-shopping-cart-2-line mr-2 text-base"></i> <span class="bg-green-800 px-1 text-xs absolute -top-2 left-3 text-white rounded-full">1</span><span class="hidden md:inline">cart</span></RouterLink>
                        </li>
                        <li v-if="!auth.getuser" class="">
                            <RouterLink to="" class="hover:text-green-800">login</RouterLink>
                        </li>
                        <li v-if="!auth.getuser">
                            <RouterLink to="" class="hover:text-green-800">register</RouterLink>
                        </li>
                        <li v-if="auth.getuser" ><i class="ri-account-box-fill text-lg"></i></li>
                        <div class="space-y-0.5 transition-all md:hidden duration-500" @click="(openNav = !openNav)">
                            <div :class="openNav? 'ml-auto' : 'ml-0'" class="w-4 transition-all duration-500 rounded-xl h-1 bg-green-900"></div>
                            <div class="w-6 rounded-xl h-1 bg-green-900"></div>
                            <div :class="openNav? 'ml-0' : 'ml-auto'" class="w-4 transition-all duration-500 rounded-xl h-1 bg-green-900"></div>
                        </div>
                    </ul>
                </div>
                <div :class="openNav? 'w-full' : 'w-0'" class="md:hidden fixed top-16 py-4 capitalize h-72 left-0 overflow-hidden transition-all duration-500">
                    <div class="w-11/12 mx-auto">
                        <ul class="space-y-6 font-semibold">
                            <li>
                                <RouterLink to="" class="hover:text-green-800">categories</RouterLink>
                            </li>
                            <li>
                                <RouterLink to="" class="hover:text-green-800">products</RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
import { userStore } from '@/stores/UserStore';
    
    const auth = userStore()
    const openNav = ref(false)
    const scrolled = ref(0)
    const bg = ref('bg-transparent')

    const handleScroll = ()=>{
        scrolled.value = window.scrollY;
        openNav.value = false;
        if(scrolled.value > 70){
            bg.value = `bg-white`
        }else{
            bg.value =`bg-transparent`
        }
    }
    window.addEventListener('scroll', handleScroll);
</script>

<style lang="scss" scoped>

</style>