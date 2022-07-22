<template>
  <div>
    <h1>Products</h1>
    <div v-for="item of items" :key="item.id">
      <p>{{ item.name }}</p>
      <button @click="addToCart(item.id)">Add to cart</button>
    </div>
    <button @click="$router.push('/cart')">Go To Cart</button>
  </div>
</template>

<script>
const items = Object.freeze([
  {
    id: 1,
    name: "TV",
  },
  {
    id: 2,
    name: "Fridge",
  },
  {
    id: 3,
    name: "Laptop",
  },
  {
    id: 4,
    name: "Mobile",
  },
]);

export default {
  name: "Store",
  data() {
    return {
      items,
      cart: [],
    };
  },
  methods: {
    isInCart(itemId) {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItem = this.cart.find(({ id }) => id === itemId);
      return;
    },
    addToCart(itemId) {
      const item = this.items.find(({ id }) => id === itemId);
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      const cartItems = JSON.parse(localStorage.getItem("cart"));
      cartItems.push(item);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cart = JSON.parse(localStorage.getItem("cart"));
    },
  },
};
</script>

<style scoped>
div {
  margin: 15px;
}
</style>
