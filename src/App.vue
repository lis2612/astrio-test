<template>
  <q-layout view="hHh lpR fFf">
    <my-header @leftDrawerOpen="toggleLeftDrawer"></my-header>

    <q-drawer show-if-above v-model="drawerOpen" side="left" elevated>
      <brands-list></brands-list>
    </q-drawer>

    <q-page-container>
      <!-- <router-view /> -->
      <cards-list></cards-list>
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
      };
    },
    methods: {
      toggleLeftDrawer() {
        console.log("!!!");
        this.drawerOpen = !this.drawerOpen;
      },
    },
  };
</script>
