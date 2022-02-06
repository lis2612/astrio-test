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
      <cards-list :filter-arr="filter" @add-to-cart="addToCart" :productList="productList"></cards-list>
    </q-page-container>
    <cart-dialog
      :dialog="dialog"
      @closeCart="dialog = !dialog"
      :countInCart="itemsInCart"
      :itemsInCart="cart"
      :productList="productList"
      @deleteItem="deleteItem"
    ></cart-dialog>
  </q-layout>
</template>

<script>
  import { ref } from "vue";
  import brandsList from "./components/brandsList.vue";
  import cardsList from "./components/cardsList.vue";
  import myHeader from "./components/myHeader.vue";
  import cartDialog from "./components/cartDialog.vue";

  export default {
    components: { brandsList, cardsList, myHeader, cartDialog },
    data() {
      return {
        productList: JSON.parse(`[
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
                                      ]`),
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
      deleteItem(id){
        this.cart=this.cart.filter(item=>item.id!=id);
        this.itemsInCart = this.cart.length;
      },
      openCart() {
        this.dialog = !this.dialog;
      },
    },
  };
</script>
