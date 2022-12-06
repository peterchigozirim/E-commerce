<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 capitalize">Create an account</h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="submit()" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="space-y-8 rounded-md shadow-sm ">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" v-model="form.email" name="email" type="email" autocomplete="email" required="" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address" />
          </div>
          <div class="relative">
            <label for="password" class="sr-only">Password</label>
            <input id="password" @keyup="(passwordError = false)" v-model="form.password" name="password" min="6" :type="showPassword? 'text' : 'password'" autocomplete="current-password" required="" :class="passwordError? 'border-red-500' : 'border-gray-300'" class="relative block w-full appearance-none rounded-none border  px-3 pr-6 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Password" />
            <div @click="(showPassword = !showPassword)" class="absolute top-1.5 z-10 cursor-pointer hover:text-green-500 text-green-800 right-2">
              <i v-if="showPassword" class="ri-lock-unlock-line"></i>
              <i v-else class="ri-lock-password-line"></i>
            </div>
            <span v-if="passwordError" class="text-xs text-red-500">Password do not match</span>
          </div>
          <div class="relative">
            <label for="password" class="sr-only">Password</label>
            <input id="password" @keyup="(passwordError = false)" v-model="form.cPassword" name="password" :type="showPassword? 'text' : 'password'" autocomplete="current-password" required="" :class="passwordError? 'border-red-500' : 'border-gray-300'" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 pr-6 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Confirm password" />
            <div @click="(showPassword = !showPassword)" class="absolute top-1.5 z-10 cursor-pointer hover:text-green-500 text-green-800 right-2">
              <i v-if="showPassword" class="ri-lock-unlock-line"></i>
              <i v-else class="ri-lock-password-line"></i>
            </div>
          </div>
        </div>
        
        <div>
          <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-green-800 py-2 px-4 font-semibold text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
            Sign in
          </button>
        </div>
        <div class="text-sm">
          <RouterLink to="/login" class="font-medium text-green-800 hover:text-green-500">I have an account</RouterLink>
        </div>
      </form>
    </div>
    <div v-if="auth.loader" class="fixed h-screen w-full top-0 left flex bg-green-800/20 z-[100] items-center backdrop-blur-sm justify-center">
      <div class="text-center">
        <img src="/images/loader/loader.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { userStore } from '../../stores/UserStore';

const auth = userStore()
const showPassword = ref(false)
const passwordError = ref(false)
const form = ref({
  email: '',
  password: '',
  cPassword: '',
  remember: false,
})

const submit = ()=>{
  if (form.value.password !== form.value.cPassword) {
      return passwordError.value = true
  } else {
    auth.registerUser(form.value)
  }
}

</script>