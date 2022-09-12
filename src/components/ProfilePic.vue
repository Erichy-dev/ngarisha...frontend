<script lang="ts" setup>
import axios from "axios";
import { ref, type Ref } from "vue";
import type { ProfileSchema } from "../components/composables/schemas/schema";

const envURL = "https://devriki.pythonanywhere.com/";
const profilePic: Ref<ProfileSchema | null> = ref(null);
try {
  axios({
    method: "get",
    url: envURL + "profile/",
  }).then((res) => {
    profilePic.value = res.data[0].fields;
  });
} catch (error) {
  console.log(error);
}
</script>

<template>
  <main class="w-1/6 ml-3">
    <div>
      <transition name="profile" appear>
        <img
          class="hover:animate-pulse rounded-full hidden sm:block"
          v-if="profilePic"
          :src="profilePic.get_image_str"
          alt="my-pic"
        />
      </transition>
    </div>
    <div>
      <button class="transition hover:animate-pulse z-30 ml-5">
        <router-link
          to="/about"
          class="font-bold font-serif text-black hover:text-cyan-900"
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
