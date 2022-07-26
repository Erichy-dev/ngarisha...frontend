<script lang="ts" setup>
import { RouterLink } from "vue-router";
import ProfilePicVue from "./ProfilePic.vue";
</script>

<template>
  <main class="flex flex-row">
    <profile-pic-vue class="hidden sm:block mt-6" />
    <h1
      class="text-purple-900 self-center w-4/6 border-b border-white pb-4 ml-10"
    >
      <router-link
        to="/"
        class="font-serif font-extrabold sm:text-xl md:text-2xl lg:text-3xl hover:animate-pulse text-inherit"
        >NGARISHA DETERGENTS COMPANY</router-link
      >
    </h1>

  </main>
</template>
