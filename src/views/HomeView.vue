<script lang="ts" setup>
import HomeProductsVue from "@/components/HomeProducts.vue";
import DescribeProductsVue from "@/components/DescribeProducts.vue";

function addCart(val: string) {
  selectedProduct.value = val;
}
onUnmounted(() => {
  selectedProduct.value = null;
});
</script>

<script lang="ts">
import { onUnmounted, ref } from "vue";
import type { Ref } from "vue";
const selectedProduct: Ref<string | null> = ref(null);
</script>

<template>
  <main class="flex-1 flex flex-col mt-8 md:mt-0">
    <describe-products-vue :selected-product="selectedProduct" />
    <home-products-vue @add-cart="addCart" />
  </main>
</template>
