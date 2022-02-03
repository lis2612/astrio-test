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
      <div class="row justify-evenly items-start">
        <template v-for="(card, index) in productList" :key="index">
          <div
            class="my-card q-pa-md row items-start q-gutter-md justify-center"
          >
            <q-card align="right">
              <q-img :src="'src/assets'+card.image">
                <div class="absolute-bottom">
                  <div class="text-h6">{{ card.title }}</div>
                </div>
              </q-img>

              <q-card-actions class="justify-between" align="right">
                <div class="text-h5 my-price">
                  {{ card.regular_price.value }}
                  {{ card.regular_price.currency }}
                </div>
                <q-btn flat icon="local_grocery_store"></q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </template>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
  import { ref } from "vue";
  import brandsList from "./components/brandsList.vue";
  export default {
    components: { brandsList },
    setup() {
      const productList = JSON.parse(`[
      {
        "type": "simple",
        "id": 1,
        "sku": "s1",
        "title": "Product 1",
        "regular_price": {
          "currency": "USD",
          "value": 27.12
        },
        "image": "/images/1.png",
        "brand": 9
      },
      {
        "type": "simple",
        "id": 2,
        "sku": "s2",
        "title": "Product 2",
        "regular_price": {
          "currency": "USD",
          "value": 36.87
        },
        "image": "/images/2.png",
        "brand": 8
      },
      {
        "type": "simple",
        "id": 3,
        "sku": "s3",
        "title": "Product 3",
        "regular_price": {
          "currency": "USD",
          "value": 28.91
        },
        "image": "/images/3.png",
        "brand": 2
      },
      {
        "type": "simple",
        "id": 4,
        "sku": "s4",
        "title": "Product 4",
        "regular_price": {
          "currency": "USD",
          "value": 41.23
        },
        "image": "/images/4.png",
        "brand": 7
      },
      {
        "type": "simple",
        "id": 5,
        "sku": "s5",
        "title": "Product 5",
        "regular_price": {
          "currency": "USD",
          "value": 88.00
        },
        "image": "/images/5.png",
        "brand": 3
      },
      {
        "type": "simple",
        "id": 6,
        "sku": "s6",
        "title": "Product 6",
        "regular_price": {
          "currency": "USD",
          "value": 127.41
        },
        "image": "/images/6.png",
        "brand": 6
      },
      {
        "type": "simple",
        "id": 7,
        "sku": "s7",
        "title": "Product 7",
        "regular_price": {
          "currency": "USD",
          "value": 123.40
        },
        "image": "/images/7.png",
        "brand": 5
      },
      {
        "type": "simple",
        "id": 8,
        "sku": "s8",
        "title": "Product 8",
        "regular_price": {
          "currency": "USD",
          "value": 92.32
        },
        "image": "/images/8.png",
        "brand": 1
      },
      {
        "type": "simple",
        "id": 9,
        "sku": "s9",
        "title": "Product 9",
        "regular_price": {
          "currency": "USD",
          "value": 53.40
        },
        "image": "/images/9.png",
        "brand": 2
      }
    ]`);
      const leftDrawerOpen = ref(false);
      return {
        productList,
        leftDrawerOpen,
        toggleLeftDrawer() {
          leftDrawerOpen.value = !leftDrawerOpen.value;
        },
      };
    },
  };
</script>
<style lang="sass">
.my-card
  min-height:  25%
.my-price
  min-width: 120px
</style>
