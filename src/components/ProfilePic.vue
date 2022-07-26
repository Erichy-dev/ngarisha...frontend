<script lang="ts" setup>
import axios, { type AxiosResponse } from "axios";
import { ref, type Ref } from "vue";
const profilePic: Ref<string> = ref("");
try {
  axios
    .get("http://localhost:8000/profile")
    .then((res: AxiosResponse<string>) => {
      profilePic.value = res.data;
    });
} catch (error) {
  //
}
</script>

<template>
  <main class="w-1/6 ml-3">
    <div>
      <transition name="profile" appear>
        <img
          class="rounded-lg hover:animate-pulse hidden sm:block"
          :src="profilePic"
          alt="my-pic"
        />
      </transition>
    </div>
    <div>
      <button class="transition hover:animate-pulse z-30 ml-5">
        <router-link
          to="/about"
          class="md:text-base font-bold font-mono hover:text-cyan-900"
          >ABOUT US</router-link
        >
      </button>
    </div>
  </main>
</template>

<style>
.profile-enter-active,
.profile-leave-active {
  transition: all 3s ease-in-out;
  transition-delay: 0.5s;
}
.profile-enter-from,
.profile-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
