<script lang="ts" setup></script>

<template>
  <main
    class="h-20 w-16 md:h-40 md:w-40 absolute left-1 md:left-3 top-3 bottom-5"
  >
    <img
      class="h-16 w-16 md:h-40 md:w-40 rounded-full hover:animate-pulse"
      src="@/assets/1.png"
      alt="my-pic"
    />
    <div>
      <button class="ml-1 md:ml-10 transition hover:animate-pulse z-30">
        <router-link
          to="/about"
          class="italic text-xs md:text-base font-bold font-mono hover:text-red-900"
          >ABOUT ME</router-link
        >
      </button>
    </div>
  </main>
</template>
