<script lang="ts" setup>
import { RouterLink } from "vue-router";
import ProfilePicVue from "./ProfilePic.vue";
</script>

<template>
  <main class="flex flex-col flex-1">
    <profile-pic-vue />
    <h1
      class="text-purple-900 self-center ml-20 lg:ml-0 mt-2 md:mt-14 border-b border-white pb-4"
    >
      <router-link
        to="/"
        class="font-serif font-extrabold md:text-3xl hover:animate-pulse"
        >NGARISHA DETERGENTS COMPANY</router-link
      >
    </h1>
  </main>
</template>
