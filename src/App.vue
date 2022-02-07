<template>
  <q-layout view="hHh lpR fFf">
    <my-header
      @leftDrawerOpen="toggleLeftDrawer"
      @openCart="openCart"
      :countItems="cart.length"
    ></my-header>

    <q-drawer
      :width="200"
      show-if-above
      v-model="drawerOpen"
      side="left"
      bordered
    >
      <brands-list @applyFilter="setFilter"></brands-list>
    </q-drawer>

    <q-page-container>
      <cards-list
        :filter-arr="filter"
        @add-to-cart="addToCart"
        :productList="productList"
      ></cards-list>
    </q-page-container>
    <cart-dialog
      :dialog="dialog"
      @closeCart="dialog = !dialog"
      :countInCart="cart.length"
      :itemsInCart="cart"
      :productList="productList"
      @deleteItem="deleteItem"
      @changeCount="changeCount"
    ></cart-dialog>
  </q-layout>
</template>

<script>
  import brandsList from "./components/brandsList.vue";
  import cardsList from "./components/cardsList.vue";
  import myHeader from "./components/myHeader.vue";
  import cartDialog from "./components/cartDialog.vue";
  import data from "./data/data";

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
        let added = false;
        if (this.cart.length > 0) {
          // если в корзине что-то есть
          for (const item of this.cart) {
            if (item.id == cardId) {
              item.count += 1;
              added = true;
            }
          }
        }
        // если в корзине ничего нет или нет подходящего артикула
        if (!added) this.cart.push({ id: cardId, count: 1 });
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

