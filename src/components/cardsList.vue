<template>
  <div class="row justify-evenly items-start">
    <template v-for="(card, id) in filteredCards" :key="id">
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
            <q-btn
              @click="$emit('addToCart', card.id)"
              icon="local_grocery_store"
              flat
            ></q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    filterArr: Array,
    productList: Array,
  },

  computed: {
    filteredCards() {
      if (this.filterArr.length < 1) {
        return this.productList
        };
      let list = [];
      for (const item of this.filterArr) {
        for (const card of this.productList) {
          if (card.brand == item) {
            list.push(card);
          }
        }
      }
      return list;
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
