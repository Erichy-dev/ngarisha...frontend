<script setup lang="ts">
import BodyFooterVue from "./components/BodyFooter.vue";
import NavBarVue from "./components/NavBar.vue";
import { ref, type Ref } from "vue";
import axios from "axios";

const mainBody: Ref<HTMLElement | null> = ref(null);
  const envURL = "https://devriki.pythonanywhere.com/";
axios({
  method: "get",
  url: envURL + "background/",
})
  .then((res) => {
    const url = res.data[0].fields.get_image_str;
    if (mainBody.value) mainBody.value.style.backgroundImage = `url('${url}')`;
  })
  .catch((err) => {
    console.log(err);
  });
</script>

<template>
  <main
    ref="mainBody"
    class="flex flex-col min-h-screen bg-cover bg-center overflow-x-hidden"
  >
    <NavBarVue />
    <RouterView />
    <BodyFooterVue />
  </main>
</template>

<style>
@import "@/assets/base.css";
</style>
