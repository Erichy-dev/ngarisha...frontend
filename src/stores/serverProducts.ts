import { defineStore } from "pinia";

export const useSelectedProductsStore = defineStore({
  id: "selectedProducts",
  state: () => ({
    selectedProducts: [],
  }),
  actions: {},
});
