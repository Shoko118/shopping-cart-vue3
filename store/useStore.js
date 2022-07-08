import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "store",
  state: () => ({
    carts: [],
    products: [
      {
        id: 1,
        name: "knife",
        price: 200,
        quantity: 1,
      },
      {
        id: 2,
        name: "toothbrush",
        price: 100,
        quantity: 2,
      },
      {
        id: 3,
        name: "laptop",
        price: 1200,
        quantity: 3,
      },
      {
        id: 4,
        name: "knife",
        price: 200,
        quantity: 1,
      },
    ],
  }),
  getters: {},
  actions: {
    addProduct(product) {
      // if (product >= 1) return alert("you cant add more");
      this.carts.push(product);
    },
  },
});
