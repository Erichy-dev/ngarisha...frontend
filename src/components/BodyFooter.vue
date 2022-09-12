<script lang="ts" setup>
import { ChatIcon, MailIcon } from "@heroicons/vue/solid";
</script>

<template>
  <main class="flex flex-col border-t border-white pt-4">
    <main class="flex flex-row w-full items-center pl-10">
      <a class="flex-1" href="#"
        ><ChatIcon
          class="h-1/5 w-1/5 text-sky-400 transition ease-in-out delay-75 hover:-translate-y-2 hover:scale-110 duration-1000 hover:drop-shadow-lg hover:shadow-black"
      /></a>
      <a class="flex-1" href="https://twitter.com/riki_dev_" target="_blank">
        <img
          src="/media/icons/twitter.png"
          class="h-2/5 w-1/5 text-sky-400transition ease-in-out delay-75 hover:-translate-y-2 hover:scale-110 duration-1000 hover:drop-shadow-lg hover:shadow-black"
        />
      </a>
      <a class="flex-1" href="https://wa.me/+254795829177" target="_blank">
        <img
          src="/media/icons/whatsapp.png"
          class="h-3/6 w-2/6 text-sky-400transition ease-in-out delay-75 hover:-translate-y-2 hover:scale-110 duration-1000 hover:drop-shadow-lg hover:shadow-black"
        />
      </a>
      <a class="flex-1" href="mailto:erichnyaga1@gmail.com" target="_blank">
        <MailIcon
          class="h-1/5 w-1/5 text-sky-400 transition ease-in-out delay-75 hover:-translate-y-2 hover:scale-110 duration-1000 hover:drop-shadow-lg hover:shadow-black"
        />
      </a>
    </main>
    <p class="self-center hover:animate-pulse font-bold">
      @Copyright 2022. Set up by
      <a href="mailto:erichnyaga1@gmail.com" class="font-extrabold">@riki</a>
    </p>
  </main>
</template>
