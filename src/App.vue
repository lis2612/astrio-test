<template>
  <q-layout view="hHh lpR fFf">
    <my-header
      @leftDrawerOpen="toggleLeftDrawer"
      :countItems="itemsInCart"
    ></my-header>

    <q-drawer show-if-above v-model="drawerOpen" side="left" elevated>
      <brands-list @applyFilter="setFilter"></brands-list>
    </q-drawer>

    <q-page-container>
      <!-- <router-view /> -->
      <cards-list :filter-arr="filter" @add-to-cart="addToCart"></cards-list>
    </q-page-container>
  </q-layout>
</template>

<script>
  import { ref } from "vue";
  import brandsList from "./components/brandsList.vue";
  import cardsList from "./components/cardsList.vue";
  import myHeader from "./components/myHeader.vue";

  export default {
    components: { brandsList, cardsList, myHeader },
    data() {
      return {
        drawerOpen: false,
        filter: [],
        itemsInCart: 0,
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
        this.itemsInCart += 1;
        console.log(`Recived emit. CardId=${cardId}`);
      },
    },
  };
</script>
