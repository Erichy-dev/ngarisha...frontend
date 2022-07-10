<script lang="ts" setup>
import {
  ChatAlt2Icon,
  ChatAltIcon,
  ChatIcon,
  MailOpenIcon,
} from "@heroicons/vue/solid";
</script>

<template>
  <main class="flex flex-col border-t border-white pt-4">
    <main class="flex flex-row bottom-0 w-full md:pl-20">
      <a class="flex-1" href=""
        ><ChatIcon
          class="h-6 w-6 md:h-10 md:w-10 text-purple-400 transition ease-in-out delay-75 hover:-translate-y-2 hover:scale-110 duration-1000 hover:drop-shadow-lg hover:shadow-black"
      /></a>
      <a class="flex-1" href=""
        ><ChatAltIcon
          class="h-6 w-6 md:h-10 md:w-10 text-purple-400 transition ease-in-out delay-75 hover:-translate-y-2 hover:scale-110 duration-1000 hover:drop-shadow-lg hover:shadow-black"
      /></a>
      <a class="flex-1" href=""
        ><ChatAlt2Icon
          class="h-6 w-6 md:h-10 md:w-10 text-purple-400 transition ease-in-out delay-75 hover:-translate-y-2 hover:scale-110 duration-1000 hover:drop-shadow-lg hover:shadow-black"
      /></a>
      <a class="flex-1" href=""
        ><MailOpenIcon
          class="h-6 w-6 md:h-10 md:w-10 text-purple-400 transition ease-in-out delay-75 hover:-translate-y-2 hover:scale-110 duration-1000 hover:drop-shadow-lg hover:shadow-black"
      /></a>
    </main>
    <p class="self-center hover:animate-pulse md:font-extrabold">
      @Copyright 2022. Set up by <a href="" class="md:font-extrabold">@riki</a>
    </p>
  </main>
</template>
