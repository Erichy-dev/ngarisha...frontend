<script lang="ts" setup></script>
<script lang="ts">
//shifted to options API to maximise on vue-router. composition API doesn't fully support vue-router.
import type { LocationQueryValue } from "vue-router";
import axios from "axios";

export default {
  data() {
    return {
      cartSelectedProducts: this.$route.query.selected,
      confirmSelect: true,
      productPrice: [],
      showConfirm: true,
    };
  },
  methods: {
    /**
     * sends the user to the delivery form
     */
    toPurchase() {
      this.$router.push({ path: "/purchase" });
    },
    /**
     * allows the user to deselect a product
     */
    undoProduct(event: Event) {
      const productId: string = (event.target as HTMLElement).id;
      const productIndex: number | undefined = (
        this.cartSelectedProducts as LocationQueryValue[]
      ).indexOf(productId);
      (this.cartSelectedProducts as LocationQueryValue[])?.splice(
        productIndex as number,
        1
      );
      (this.productPrice as string[]).splice(productIndex as number, 1);
    },
    /**
     * sends the confirmed customer's selection of products to the database
     */
    sendSelectedProducts() {
      axios.post(
        "http://localhost:8000/confirmSelection",
        this.cartSelectedProducts
      );
      this.showConfirm = false;
    },
  },
  created() {
    if (typeof this.cartSelectedProducts === typeof "") {
      this.cartSelectedProducts = [
        this.cartSelectedProducts as LocationQueryValue,
      ];
    }
    const queryParams = (this.cartSelectedProducts as LocationQueryValue[]).map(
      (el) => (el as string).replace("/", "%2F")
    );
    const fetcher = async () => {
      await axios
        .get(`http://localhost:8000/prices/${queryParams}`)
        .then((res) => (this.productPrice = res.data));
      // this.productPrice.forEach((element: string) => {
      //   this.totalPrice += Number((element as string).substring(4));
      // });
    };
    fetcher();
  },
};
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
      <div class="flex flex-col" v-if="confirmSelect">
        <div class="flex flex-row">
          <div class="flex flex-col">
            <transition-group name="selected">
              <div
                v-for="product of cartSelectedProducts"
                :key="String(product)"
                class="flex-1 m-1 flex flex-row"
              >
                <img
                  class="rounded-md w-10 h-10 md:w-20 md:h-18 lg:w-24 lg:h-20"
                  :src="String(product)"
                  alt="detergents at their best"
                />
                <button
                  @click="undoProduct($event)"
                  :id="String(product)"
                  class="font-bold text-purple-600 hover:text-cyan-900 hover:animate-pulse font-serif bg-slate-200 rounded-md p-1 m-1 md:m-4 undoButton"
                >
                  UNDO
                </button>
              </div>
            </transition-group>
          </div>
          <div class="flex flex-col space-y-16 mt-8">
            <transition-group name="selected">
              <div v-for="price in productPrice" :key="price">
                <button class="text-xl font-bold">{{ price }}</button>
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
          <button
            @click="toPurchase"
            id="deliveryButton"
            class="bg-purple-500 rounded-full p-1 font-bold hover:text-red-900 hover:animate-pulse font-serif text-sm md:text-xl deliveryPush"
          >
            DELIVERY FORM
          </button>
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
  transition: all 2s ease-in-out
}
.confirm-enter-from,
.confirm-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
