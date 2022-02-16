<template>
  <div class="row q-pa-lg">
    <template v-if="this.$store.getters.filteredList.length < 1">
      <div class="my-card text-h6">No products found for the this filters</div>
    </template>
    <template
      v-else
      v-for="card in this.$store.getters.filteredList"
      :key="card.id"
    >
      <div
      class="my-card q-pa-md "
      :class="[$q.platform.is.mobile ? 'col-grow':'row col-auto']"
      >
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
              @click="
                this.$store.commit('addItemToCart', { id: card.id, count: 1 })
              "
              icon="local_grocery_store"
              flat
            ></q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </template>
  </div>
</template>

<script></script>

<style lang="sass" scoped>
.my-card
  min-height: 40%
.my-price
  min-width: 125px
</style>
