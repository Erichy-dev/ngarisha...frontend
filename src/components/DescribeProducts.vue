<script lang="ts" setup>
import { ShoppingCartIcon } from "@heroicons/vue/solid";
import type { Ref } from "vue";
import { RouterLink } from "vue-router";

// useRouter().
const customer_detergents: Ref<number> = ref(0);
const props = defineProps<{
  selectedProduct: string | null;
}>();
const cartSelectedProducts: Ref<string[]> | null = ref([]);
const cartProducts = toRef(props, "selectedProduct");

watchEffect(() => {
  if (cartProducts.value) {
    if (!cartSelectedProducts.value.includes(cartProducts.value)) {
      cartSelectedProducts.value.push(cartProducts.value);
    }
  }
  customer_detergents.value = cartSelectedProducts.value.length;
  //toggle cart
  if (customer_detergents.value > 0) showCart.value = true;
  else showCart.value = false;
});
</script>
<script lang="ts">
import { ref, watchEffect, toRef } from "vue";
const showCart: Ref<boolean> = ref(false);
</script>

<template>
  <main class="flex md:flex-row flex-col flex-1">
    <div class="w-10/12 flex flex-col">
      <p class="font-bold text-lg text-sky-600 w-6/12 self-center">
        We pride ourselves in production of
        <span class="font-extrabold text-green-600">high quality</span> products
        at a <span class="font-extrabold text-green-600">comrade price</span>.
        Our products have been thoroghly
        <span class="font-extrabold text-green-600">tested</span> to
        satisfaction. Moreover, we've received infinite
        <router-link
          to="/reviews"
          class="underline font-extrabold text-green-600"
          >positive feedback
        </router-link>
        from our clients. Do not miss out on these exquisites.
      </p>
    </div>
    <transition name="cart">
      <div class="flex flex-col" v-if="showCart" id="cart">
        <router-link
          :to="{
            name: 'confirmselection',
            query: { selected: cartSelectedProducts },
          }"
          ><shopping-cart-icon
            class="flex-1 text-white w-20 h-14 md:w-24 md:h-20 mr-10 mt-1 md:mt-4 lg:ml-6 transition ease-in-out delay-75 hover:-translate-y-2 hover:scale-110 duration-1000 hover:drop-shadow-lg hover:shadow-red-900"
        /></router-link>
        <div class="flex-1 inner">
          <button
            id="selectedNumber"
            class="ml-4 lg:ml-10 transition hover:animate-pulse"
          >
            <router-link
              :to="{
                name: 'confirmselection',
                query: { selected: cartSelectedProducts },
              }"
              class="italic font-bold font-mono hover:text-cyan-900"
              >SELECTED {{ customer_detergents }}</router-link
            >
          </button>
        </div>
      </div>
    </transition>
  </main>
</template>
<style>
.cart-enter-active,
.cart-leave-active {
  transition: all 1s ease-in-out;
}
.cart-enter-from,
.cart-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
