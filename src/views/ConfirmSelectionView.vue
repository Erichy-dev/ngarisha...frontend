<script lang="ts" setup>
import { ref, type Ref } from "vue";
import type { ProductSchema } from "@/components/composables/schemas/schema";
import { useRouter } from "vue-router";
import axios from "axios";

type SendId = ProductSchema & {
  id: number;
};
const cartSelectedProducts: Ref<SendId[] | null> = ref(null);
const envURL = "https://devriki.pythonanywhere.com/";
function fetcher() {
  /**
   * if this becomes a problem just use window...
   */
  const uri: string = window.location.href;
  const queryStartPoint = uri.indexOf("?");
  const query: string = uri.substring(queryStartPoint);
  axios({
    method: "get",
    url: envURL + `selectedProducts/${query}`,
  })
    .then((res) => {
      cartSelectedProducts.value = res.data;
      if (cartSelectedProducts.value) {
        for (let i = 0; i < cartSelectedProducts.value.length; i++) {
          const elem = cartSelectedProducts.value[i];
          elem.id = i;
        }
      }
    })
    .catch((error) => console.log(error));
}
fetcher();

/**
 * Deselects a selected product
 */
function undoProduct(event: Event) {
  const productId = Number((event.target as HTMLElement).id);
  cartSelectedProducts.value?.splice(productId, 1);
}

const showConfirm = ref(true);
/**
 * use useRouter() directly inside setup otherwise inject won't work
 */
const pusher = useRouter();
function sendSelectedProducts() {
  showConfirm.value = false;
  axios({
    method: "post",
    url: envURL + "confirmSelection/",
    data: JSON.stringify(cartSelectedProducts.value),
  })
    .then(() => {
      pusher.push("/productsConfirmed");
    })
    .catch((err) => console.log(err));
}
</script>

<template>
  <main class="flex-1 self-center">
    <h1 class="font-extrabold text-sm md:text-2xl">
      Thank you for doing business with us.
    </h1>
    <section class="md:mb-10">
      <h2 class="font-bold">
        Confirm your selections then fill the delivery form.
      </h2>
      <div class="flex flex-col" v-if="cartSelectedProducts">
        <div class="flex flex-row">
          <div class="flex flex-col">
            <transition-group name="selected">
              <div
                v-for="product of cartSelectedProducts"
                :key="product.fields.name"
                class="flex-1 m-1 flex flex-row"
              >
                <img
                  class="rounded-md w-10 h-10 md:w-20 md:h-18 lg:w-24 lg:h-20"
                  :src="product.fields.get_image_str"
                  alt="detergents at their best"
                />
                <div>
                  <button
                    class="font-bold text-black hover:text-cyan-900 hover:animate-pulse font-serif bg-slate-200 rounded-md p-1 ml-1 md:mt-2"
                  >
                    {{ product.fields.price }}
                  </button>
                </div>
                <button
                  @click="undoProduct($event)"
                  :id="String(product.id)"
                  class="font-bold text-purple-600 hover:text-cyan-900 hover:animate-pulse font-serif bg-slate-200 rounded-md p-1 m-1 md:m-4 md:mt-1.5 undoButton"
                >
                  UNDO
                </button>
              </div>
            </transition-group>
          </div>
        </div>
        <div class="flex flex-row space-x-1 md:space-x-2">
          <transition name="confirm">
            <button
              v-if="showConfirm"
              @click="sendSelectedProducts"
              class="font-bold hover:text-sky-900 hover:animate-pulse font-serif text-sm md:text-lg bg-purple-500 rounded-full p-1"
            >
              CONFIRM<!--talk to db-->
            </button>
          </transition>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.selected-move,
.selected-enter-active,
.selected-leave-active {
  transition: all 2s ease;
}
.selected-enter-from,
.selected-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.selected-leave-active {
  position: absolute;
}

.confirm-enter-active,
.confirm-leave-active {
  transition: all 2s ease-in-out;
}
.confirm-enter-from,
.confirm-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
