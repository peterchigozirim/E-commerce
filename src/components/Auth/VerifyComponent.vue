<template>
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 capitalize">Verify email address</h2>
        </div>
        <form class="mt-8 space-y-6" @submit.prevent="submit()" method="POST">
          <div>
            <p></p>
            <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-green-800 py-2 px-4 font-semibold text-white hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              Verify now
            </button>
          </div>
          <div class="text-sm">
            <div>
              <a href="#" class="font-medium text-green-800 hover:text-green-500">Forgot your password?</a>
            </div>
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
  import { userStore } from '../../stores/UserStore';


  const auth = userStore()

  const submit = ()=>{
    auth.verifyUser()
  }
  
  </script>