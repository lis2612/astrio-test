<template>
  <q-layout view="hHh lpR fFf">
    <my-header
      @leftDrawerOpen="toggleLeftDrawer"
      @openCart="openCart"
      :countItems="itemsInCart"
    ></my-header>

    <q-drawer show-if-above v-model="drawerOpen" side="left" elevated>
      <brands-list @applyFilter="setFilter"></brands-list>
    </q-drawer>

    <q-page-container>
      <!-- <router-view /> -->
      <cards-list :filter-arr="filter" @add-to-cart="addToCart"></cards-list>
    </q-page-container>
    <cart-dialog
      :dialog="dialog"
      @closeCart="dialog = !dialog"
      :countInCart="itemsInCart"
      :itemsInCart="cart"
    ></cart-dialog>
  </q-layout>
</template>

<script>
  import { ref } from "vue";
  import brandsList from "./components/brandsList.vue";
  import cardsList from "./components/cardsList.vue";
  import myHeader from "./components/myHeader.vue";
  import cartDialog from "./components/cartDialog.vue";
  import CartDialog from "./components/cartDialog.vue";

  export default {
    components: { brandsList, cardsList, myHeader, CartDialog },
    data() {
      return {
        drawerOpen: false,
        filter: [],
        itemsInCart: 0,
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
        let added = false;
        if (this.cart.length < 1) {
          this.cart.push({ id: cardId, count: 1 });
          added = true;
        } else {
          for (const item of this.cart) {
            if (item.id == cardId) {
              item.count += 1;
              added = true;
            }
          }
        }
        if (!added) this.cart.push({ id: cardId, count: 1 });
        this.itemsInCart = this.cart.length;
      },
      openCart() {
        this.dialog = !this.dialog;
      },
    },
  };
</script>
