<script lang="ts" setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";
import ProfilePic from "./ProfilePic.vue";
import axios from "axios";
import { ref, watch, type Ref } from "vue";
import { moveLeft, moveRight } from "./composables/Homeproducts";

/*
1. serve the products from the server
*/
const serverProducts: Ref<
  { name: string; price: string; product: string }[] | null
> = ref(null);
try {
  axios.get("http://localhost:8000/products").then((res) => {
    serverProducts.value = res.data;
  });
} catch (error) {
  console.log((error as Error).message);
}

type productSchema = {
  name: string;
  price: string;
  product: string;
}[];
const numberOfProducts: Ref<number | null> = ref(null);
const num1: Ref<number | null> = ref(null);
const products: Ref<{ key: number; name: string; class: string }[] | null> =
  ref(null);
const activeProduct: Ref<string | null> = ref(null);
const price: Ref<string | null> = ref(null);
watch(serverProducts, () => {
  numberOfProducts.value = (serverProducts.value as productSchema).length;
  num1.value = Math.floor(numberOfProducts.value / 2);
  products.value = [
    {
      key: num1.value,
      name: (serverProducts.value as productSchema)[num1.value as number]
        .product,
      class: class1.value,
    },
    {
      key: num1.value,
      name: (serverProducts.value as productSchema)[++(num1.value as number)]
        .product,
      class: class2.value,
    },
    {
      key: num1.value,
      name: (serverProducts.value as productSchema)[++(num1.value as number)]
        .product,
      class: class1.value,
    },
  ];
  activeProduct.value = (serverProducts.value as productSchema)[
    (num1.value as number) - 1
  ].product;
  price.value = (serverProducts.value as productSchema)[
    (num1.value as number) - 1
  ].price;
});
const class1: Ref<string> = ref("rounded-full w-3/6 h-5/6 blur-sm");
const class2: Ref<string> = ref("rounded-full w-3/6 h-5/6");

// had an issue with cartProducts. when using arrays make sure to ([]) otherwise won't work
function moveProductLeft() {
  moveLeft(
    num1 as Ref<number>,
    products as Ref<{ key: number; name: string; class: string }[]>,
    class1,
    class2,
    activeProduct as Ref<string>,
    serverProducts as Ref<productSchema>,
    price as Ref<string>
  );
}
function moveProductRight() {
  moveRight(
    num1 as Ref<number>,
    numberOfProducts as Ref<number>,
    products as Ref<{ key: number; name: string; class: string }[]>,
    activeProduct as Ref<string>,
    class1,
    class2,
    serverProducts as Ref<productSchema>,
    price as Ref<string>
  );
}

const emit = defineEmits<{
  (e: "addCart", val: string): void;
}>();
function addToCart() {
  emit("addCart", activeProduct.value as string);
}
</script>
<script lang="ts"></script>

<template>
  <main class="mt-10 flex flex-col flex-1">
    <p class="self-center italic font-serif font-extralight text-cyan-700">
      Select detergent to order
    </p>
    <div class="flex flex-row self-center">
      <transition-group name="product" appear>
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
        class="w-2/6 h-2/6 absolute right-2/3 top-1/3 z-30 text-white moveLeft"
      />
      <chevron-right-icon
        @click="moveProductRight"
        class="w-2/6 h-2/6 absolute left-2/3 text-white moveRight top-1/3"
      />
    </div>
    <div class="text-black font-bold text-lg flex-1 self-center mt-1">
      {{ price }}
    </div>
    <div class="flex-1 self-center mt-1 md:mt-4">
      <button
        @click="addToCart"
        id="addToCart"
        class="hover:animate-pulse font-bold font-mono text-blue-900 ,md:text-2xl bg-cyan-500 rounded-full p-1"
      >
        SELECT
      </button>
    </div>
    <div id="closeToFoot" class="flex-1 flex flex-row items-center">
      <h3 class="flex-1">
        <router-link
          to="/reviews"
          class="font-bold ml-1 md:ml-5 hover:text-cyan-900 hover:animate-pulse font-mono md:text-2xl"
          >REVIEWS</router-link
        >
      </h3>
      <profile-pic class="block sm:hidden flex-1" />
    </div>
  </main>
</template>

<style scoped>
.product-move,
.product-enter-active,
.product-leave-active {
  transition: all 1s ease;
}
.product-enter-from,
.product-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.product-leave-active {
  position: absolute;
}
</style>
