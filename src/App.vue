<template>
  <q-layout view="hHh lpR fFf">
    <my-header
      @leftDrawerOpen="toggleLeftDrawer"
      @openCart="openCart"
      :countItems="cart.length"
    ></my-header>

    <q-drawer
      :width="200"
      v-model="drawerOpen"
      side="left"
      show-if-above
      bordered
    >
      <brands-list @applyFilter="setFilter"></brands-list>
    </q-drawer>

    <q-page-container>
      <cards-list
        :productList="productList"
        :filter-arr="filter"
        @add-to-cart="addToCart"
      ></cards-list>
    </q-page-container>
    <cart-dialog
      :productList="productList"
      :dialog="dialog"
      :countInCart="cart.length"
      :itemsInCart="cart"
      @closeCart="dialog = !dialog"
      @deleteItem="deleteItem"
      @changeCount="changeCount"
    ></cart-dialog>
  </q-layout>
</template>

<script>
import brandsList from './components/brandsList.vue';
import cardsList from './components/cardsList.vue';
import myHeader from './components/myHeader.vue';
import cartDialog from './components/cartDialog.vue';
import data from './data/data';

export default {
  components: { brandsList, cardsList, myHeader, cartDialog },
  data() {
    return {
      productList: data.productData,
      drawerOpen: false,
      filter: [],
      dialog: false,
      cancelEnabled: false,
      cart: [],
    };
  },
  methods: {
    toggleLeftDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
    setFilter(event) {
      this.filter = event;
    },
    addToCart(cardId) {
      let indx = this.cart.findIndex((item) => item.id == cardId);
      if (indx == -1) {
        this.cart.push({ id: cardId, count: 1 });
      } else {
        this.cart[indx].count += 1;
      }
    },
    deleteItem(id) {
      this.cart = this.cart.filter((item) => item.id != id);
    },
    changeCount(id, count) {
      for (const item of this.cart) {
        if (item.id == id) {
          item.count = count;
        }
      }
    },
    openCart() {
      this.dialog = !this.dialog;
    },
  },
};
</script>
