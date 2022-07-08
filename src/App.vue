<script setup>
import { storeToRefs } from "pinia";
import { useStore } from "../store/useStore";

const store = useStore();
const { products, carts } = storeToRefs(store);
</script>

<template>
  <div>
    <h1>Shopping cart</h1>

    <h2>Cart added</h2>

    <ul>
      <li v-for="product in products" :key="product.id">
        <div>{{ product.name }}</div>
        <div>{{ product.price }}</div>
        <div>{{ product.quantity }}</div>
        <button @click.prevent="store.addProduct(product)">Add</button>
      </li>
    </ul>

    <h1>The Carts</h1>
    <ul>
      <li v-for="cart in carts" :key="cart">
        <div>{{ cart.name }}</div>
        <div>{{ cart.price }}</div>
        <div>{{ cart.quantity }}</div>
      </li>
    </ul>
  </div>
</template>
