<script lang="ts" setup>
import { ShoppingCartIcon } from "@heroicons/vue/solid";
import { ref, computed, watchEffect } from "vue";
import { RouterLink } from "vue-router";
import type { Ref } from "vue";

const customer_detergents: Ref<number> = ref(0);
const props = defineProps<{
  selectedProduct: string | null;
}>();
const cartSelectedProducts: Ref<string[]> | null = ref([]);
const cartProducts = computed<string | null>(() => {
  return props.selectedProduct;
});
watchEffect(() => {
  if (cartProducts.value) {
    if (!cartSelectedProducts.value.includes(cartProducts.value)) {
      cartSelectedProducts.value.push(cartProducts.value);
    }
  }
  customer_detergents.value = cartSelectedProducts.value.length;
  //toggle cart
  if (customer_detergents.value > 0) showCart.value = true;
});
</script>
<script lang="ts">
const showCart: Ref<boolean> = ref(false);
</script>

<template>
  <main class="mt-6 md:mt-0 ml-4 md:ml-60 flex md:flex-row flex-col">
    <ul class="md:mr-36 lg:pl-20">
      <li class="font-bold text-blue-600">
        <span class="text-cyan-900 font-bold">Cheap.</span> ksh. 30 less than
        erial, omo or any other liquid detergent of same quantity.
      </li>
      <li class="font-bold text-blue-600">
        <span class="text-cyan-900 font-bold">Long-lasting.</span> Lasts 8 days
        more than OMO, sunlight or any other detergent of same quantity.
      </li>
      <li class="font-bold text-blue-600">
        <span class="text-cyan-900 font-bold">Effecient.</span> Works
        magnificent in hard stains. More effective than JIK.
      </li>
      <li class="font-bold text-green-600">
        Test it out. Don't forget to leave a review.
      </li>
    </ul>
    <div class="flex flex-col" v-if="showCart">
      <router-link
        :to="{
          name: 'confirmselection',
          query: { selected: cartSelectedProducts },
        }"
        ><shopping-cart-icon
          class="flex-1 text-white w-20 h-14 md:w-24 md:h-20 mr-10 mt-1 md:mt-4 lg:ml-6 transition ease-in-out delay-75 hover:-translate-y-2 hover:scale-110 duration-1000 hover:drop-shadow-lg hover:shadow-red-900"
      /></router-link>
      <div class="flex-1">
        <button class="ml-4 transition hover:animate-pulse">
          <router-link
            :to="{
              name: 'confirmselection',
              query: { selected: cartSelectedProducts },
            }"
            class="italic font-bold font-mono hover:text-red-900"
            >SELECTED {{ customer_detergents }}</router-link
          >
        </button>
      </div>
    </div>
  </main>
</template>
