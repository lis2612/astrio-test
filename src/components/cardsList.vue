<template>
  <div class="row justify-evenly items-start">
    <template v-for="(card, index) in filteredList" :key="index">
      <div class="my-card q-pa-md row items-start q-gutter-md justify-center">
        <q-card align="right">
          <q-img :src="'src/assets' + card.image">
            <div class="absolute-bottom">
              <div class="text-h6">{{ card.title }}</div>
              <div class="text-h7">Brand: {{ card.brand }}</div>
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
</template>

<script>
  // import { ref, computed } from "vue";
  export default {
    props: {
      filterArr: Array,
    },
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
        filteredList: {},
      };
    },
    created() {
      this.filteredList = this.productList;
    },
    beforeUpdate() {
      let list = [];
      for (const item of this.filterArr) {
        for (const card of this.productList) {
          if (card.brand == item) {
            list.push(card);
          }
        }
      }
      this.filteredList = list;
    },

    computed: {
      filteringCards() {
        const arr = this.filter;
        console.log(arr);
        return filteredList;
      },
    },
  };
</script>

<style lang="sass" scoped>
.my-card
  min-height: 40%
.my-price
  min-width: 120px
</style>
