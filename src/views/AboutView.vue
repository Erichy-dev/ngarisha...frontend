<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="md:pl-40 flex-1 flex flex-col">
    <section class="w-5/12 self-center">
      <h1 class="font-bold md:m-20 text-green-600 text-5xl">ABOUT US</h1>
      <p class="font-bold text-lg text-sky-600">
        We are a group of hardworking students at Mount Kenya University. We pride ourselves in production of
        <span class="font-extrabold text-green-600">high quality</span> products
        at a <span class="font-extrabold text-green-600">comrade price</span>.
        Our products have been thoroghly
        <span class="font-extrabold text-green-600">tested</span> to
        satisfaction. Moreover, we've received infinite
        <router-link
          to="/reviews"
          class="underline font-extrabold text-green-600"
          >positive feedback
        </router-link>
        from our clients. Do not miss out on these exquisites.
      </p>
    </section>
  </main>
</template>
