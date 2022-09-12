<script lang="ts" setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";
import ProfilePic from "./ProfilePic.vue";
import axios from "axios";
import { ref, type Ref } from "vue";
import { moveLeft, moveRight } from "./composables/Homeproducts";
import type {
  ProductSchema,
  DisplayProductSchema,
} from "./composables/schemas/schema";

/*
1. serve the products from the server
*/
const envURL = "https://devriki.pythonanywhere.com/";
const serverProducts: Ref<ProductSchema[] | null> = ref(null);
try {
  axios({
    method: "get",
    url: envURL + "products/",
  }).then((res) => {
    serverProducts.value = res.data;
    getProducts();
  });
} catch (error) {
  console.log(error);
}

const class1: Ref<string> = ref("rounded-full w-3/12 blur-md");
const class2: Ref<string> = ref("rounded-full w-3/12");
const numberOfProducts: Ref<number | null> = ref(null);
const num1: Ref<number | null> = ref(null);
const products: Ref<DisplayProductSchema | null> = ref(null);
const activeProduct: Ref<string | null> = ref(null);
// const activeProductName: Ref<string | null> = ref(null);
const price: Ref<string | null> = ref(null);
function getProducts() {
  const availableProducts = serverProducts.value;
  if (availableProducts) {
    numberOfProducts.value = availableProducts.length;
    num1.value = Math.floor(numberOfProducts.value / 2);
    products.value = [
      {
        key: num1.value,
        name: availableProducts[num1.value as number].fields.get_image_str,
        slug: availableProducts[num1.value as number].fields.slug,
        price: availableProducts[num1.value as number].fields.price,
        class: class1.value,
      },
      {
        key: num1.value,
        name: availableProducts[++(num1.value as number)].fields.get_image_str,
        slug: availableProducts[num1.value as number].fields.slug,
        price: availableProducts[num1.value as number].fields.price,
        class: class2.value,
      },
      {
        key: num1.value,
        name: availableProducts[++(num1.value as number)].fields.get_image_str,
        slug: availableProducts[num1.value as number].fields.slug,
        price: availableProducts[num1.value as number].fields.price,
        class: class1.value,
      },
    ];
    activeProduct.value =
      availableProducts[(num1.value as number) - 1].fields.slug;
    price.value = availableProducts[(num1.value as number) - 1].fields.price;
  }
}

/**
 * moves the products to the left
 */
function moveProductLeft() {
  moveLeft(
    num1 as Ref<number>,
    products as Ref<DisplayProductSchema>,
    class1,
    class2,
    activeProduct as Ref<string>,
    serverProducts as Ref<ProductSchema[]>,
    price as Ref<string>
  );
}
/**
 * moves the products to the right
 */
function moveProductRight() {
  moveRight(
    num1 as Ref<number>,
    numberOfProducts as Ref<number>,
    products as Ref<DisplayProductSchema>,
    activeProduct as Ref<string>,
    class1,
    class2,
    serverProducts as Ref<ProductSchema[]>,
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
    <p
      class="self-center italic font-bold font-serif text-black animate-bounce"
    >
      Order detergents
    </p>
    <div class="flex flex-row self-center" id="sellProducts">
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
        class="w-2/6 h-2/6 absolute right-2/3 top-1/3 z-30 text-black moveLeft"
      />
      <chevron-right-icon
        @click="moveProductRight"
        class="w-2/6 h-2/6 absolute left-2/4 text-black moveRight top-1/3"
      />
    </div>
    <div class="text-black font-bold md:text-lg flex-1 self-center mt-1 w-2/6">
      {{ price }}
    </div>
    <div class="flex-1 self-center mt-1 md:mt-4 w-2/6">
      <button
        @click="addToCart"
        id="addToCart"
        class="font-bold font-mono text-blue-900 ,md:text-2xl bg-cyan-500 rounded-full p-1"
      >
        SELECT
      </button>
    </div>
    <div id="closeToFoot" class="flex-1 flex flex-row items-center">
      <h3 class="flex-1">
        <router-link
          to="/reviews"
          class="font-bold ml-1 md:ml-5 hover:text-cyan-900 hover:animate-pulse font-serif text-black md:text-2xl"
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
