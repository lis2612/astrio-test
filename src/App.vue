<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <div>
            <img
              style="margin-top: 10px; margin-left: 20px"
              src="./assets/logo.png"
            />
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" elevated>
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

  export default {
    components: { brandsList, cardsList },
    setup() {

      const leftDrawerOpen = ref(false);
      return {
        
        leftDrawerOpen,
        toggleLeftDrawer() {
          leftDrawerOpen.value = !leftDrawerOpen.value;
        },
      };
    },
  };
</script>
<style lang="sass">

</style>
