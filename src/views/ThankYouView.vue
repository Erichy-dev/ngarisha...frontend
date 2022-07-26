<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="flex-1 flex flex-col">
    <section class="self-center">
      <h1 class="font-extrabold text-green-500 text-xl animate-pulse w-10/12">
        THANK YOU FOR PURCHASING NGARISHA DETERGENTS.
      </h1>
      <br />
      <span class="font-extrabold text-sky-600 text-xl w-10/12"
        >Check out
        <router-link to="/" class="font-extrabold text-sky-800 text-xl"
          >other products.</router-link
        ></span
      >
    </section>
  </main>
</template>
