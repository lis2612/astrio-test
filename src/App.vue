<template>
  <q-layout view="hHh lpR fFf">
    <my-header
      @toggleFilterDrawer="toggleFilterDrawer"
      @openCart="cartOpened=true"
    ></my-header>

    <q-drawer
      :width="200"
      v-model="filterOpened"
      side="left"
      show-if-above
      bordered
    >
      <brands-list ></brands-list>
    </q-drawer>

    <q-page-container>
      <cards-list
        @add-to-cart="addToCart"
      ></cards-list>
    </q-page-container>
    <cart-dialog
      :cartVisible="cartOpened"
      @closeCart="cartOpened = false"
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
import { mapMutations } from 'vuex';
import store from './store';

export default {
  components: { brandsList, cardsList, myHeader, cartDialog },
  ...mapMutations ([
    'addItemToCart',
    'deleteItemFromCart',
    'clearShoppingCart',
    'incrementQtyOfItemInCart'
  ]),
  data() {
    return {
      filterOpened: false,
      cartOpened: false,
    };
  },
  methods: {
    toggleFilterDrawer() {
      this.filterOpened = !this.filterOpened;
    },

    addToCart(itemId) {
      store.commit('addItemToCart',itemId)
    },

    deleteItem(id) {
      store.commit('deleteItemFromCart',itemId)
    },

    changeCount(itemId, count) {
      store.commit('changeQtyOfItemInCart',itemId, count)
    },
  },
};
</script>
