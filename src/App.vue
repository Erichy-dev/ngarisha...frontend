<script setup lang="ts">
import BodyFooterVue from "./components/BodyFooter.vue";
import NavBarVue from "./components/NavBar.vue";
</script>

<template>
  <main class="flex flex-col min-h-screen bg-cyan-200 bg-cover">
    <NavBarVue />
    <RouterView />
    <BodyFooterVue />
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
