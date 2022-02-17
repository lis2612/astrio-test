<template>
  <q-layout view="hHh lpR fFf">
    <my-header
      @toggleFilterDrawer="toggleFilterDrawer"
      @openCart="cartOpened = true"
    ></my-header>

    <q-drawer
      :width="200"
      v-model="filterOpened"
      side="left"
      show-if-above
      bordered
    >
      <brands-list/>
    </q-drawer>

    <q-page-container>
      <cards-list/>
    </q-page-container>
    <cart-dialog
      :cartVisible="cartOpened"
      @closeCart="cartOpened = false"
    />
  </q-layout>
</template>

<script>
import brandsList from './components/brandsList.vue';
import cardsList from './components/cardsList.vue';
import myHeader from './components/myHeader.vue';
import cartDialog from './components/cartDialog.vue';

export default {
  components: { brandsList, cardsList, myHeader, cartDialog },
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
  },
};
</script>
