<script lang="ts" setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";



const emit = defineEmits<{
  (e: "addCart", val: string): void;
}>();
function addToCart() {
  emit("addCart", activeProduct.value);
}
</script>
<script lang="ts">
export function moveProductLeft(){
  moveLeft(num1, products, class1, class2, activeProduct)
}
export function moveProductRight(){
  moveRight(num1, numberOfProducts, products, activeProduct, class1, class2)
}
import { ref, type Ref } from "vue";
import { moveLeft, moveRight } from "./composables/Homeproducts"
const numberOfProducts = ref(5);
const num1 = ref(2);
const class1: Ref<string> = ref(
  "rounded-full w-20 h-16 md:w-60 md:h-44 lg:w-72 lg:h-52 blur-sm"
);
const class2: Ref<string> = ref(
  "rounded-full w-20 h-16 md:w-60 md:h-44 lg:w-72 lg:h-52"
);
const products: Ref<{ key: number; name: string; class: string }[]> = ref([
  {
    key: 1,
    name: `/${num1.value}.png`,
    class: class1.value,
  },
  {
    key: 2,
    name: `/${++num1.value}.png`,
    class: class2.value,
  },
  {
    key: 3,
    name: `/${++num1.value}.png`,
    class: class1.value,
  },
]);

const activeProduct: Ref<string> = ref(`/${num1.value - 1}.png`);
// had an issue with cartProducts. when using arrays make sure to ([]) otherwise won't work
</script>

<template>
  <main class="mt-10 flex flex-col">
    <p class="self-center italic font-serif font-extralight text-red-700">
      Select detergent to order
    </p>
    <div class="flex flex-row self-center">
      <transition-group name="product">
        <img
          v-for="product of products"
          :key="product.key"
          :class="product.class"
          :src="product.name"
          alt="detergents at their best"
        />
      </transition-group>
      <chevron-left-icon
        @click="moveProductLeft"
        class="md:w-10 md:h-10 w-8 h-8 mt-4 md:mt-14 absolute left-10 md:left-48 lg:left-60 lg:mt-20 z-30 text-white moveLeft"
      />
      <chevron-right-icon
        @click="moveProductRight"
        class="md:w-10 md:h-10 w-8 h-8 mt-4 md:mt-14 absolute left-20 ml-24 md:left-44 md:ml-80 lg:left-52 z-30 lg:mt-20 lg:ml-96 text-white moveRight"
      />
    </div>
    <div class="flex-1 self-center mt-1 md:mt-4">
      <button
        @click="addToCart"
        class="hover:animate-pulse font-bold font-mono hover:text-red-900 ,md:text-2xl bg-pink-500 rounded-full p-1"
      >
        SELECT
      </button>
    </div>
    <h3 class="flex-1 mt-6 md:mt-0">
      <router-link
        to="/reviews"
        class="font-bold ml-1 md:ml-5 hover:text-red-900 hover:animate-pulse font-mono md:text-2xl"
        >REVIEWS</router-link
      >
    </h3>
  </main>
</template>

<style scoped>
.product-move,
.product-enter-active,
.product-leave-active {
  transition: all 1s ease;
}
.productDisplay-enter-from,
.product-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.product-leave-active {
  position: absolute;
}
</style>
