<script lang="ts" setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="flex-1 flex flex-col pb-10">
    <section class="w-10/12 md:w-5/12 self-center">
      <h1 class="font-extrabold md:ml-20 text-cyan-900 text-xl md:text-5xl">
        ABOUT US
      </h1>
      <p class="font-bold text-lg text-black">
        We are a group of hardworking students at Mount Kenya University. We
        pride ourselves in
        <span class="font-bold text-blue-900">high quality</span> products at a
        <span class="font-bold text-blue-900">comrade price</span>. Our products
        have been thoroghly
        <span class="font-bold text-blue-900">tested</span> to satisfaction.
        Moreover, we've received infinite
        <router-link to="/reviews" class="underline font-bold text-blue-900"
          >positive feedback
        </router-link>
        from our clients. Do not miss out on these exquisites.
      </p>
    </section>
  </main>
</template>
