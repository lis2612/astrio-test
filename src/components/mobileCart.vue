<template>
  <template v-for="item in this.$store.state.shoppingCart" :key="item.id">
    <div class="my-card q-pa-md col-grow">
      <q-card align="right">
        <q-img :src="'src/assets' + item.image">
          <div class="absolute-bottom">
            <div class="text-h6">{{ item.title }}</div>
            <div class="text-h7">Brand: {{ item.brand }}</div>
            <div class="text-h7">
              Price:
              {{
                item.regular_price.value.toFixed(2) +
                ' ' +
                item.regular_price.currency
              }}
            </div>
            <div class="text-h7">Qty in cart: {{ item.qty }}</div>
          </div>
        </q-img>

        <q-card-actions class="justify-between" align="right">
          <div class="text-h6">
            Total: ${{ (item.qty * item.regular_price.value).toFixed(2) }}
          </div>
          <div class="text-h6">
            <q-btn
              @click="
                this.$store.commit('changeQtyItemInCart', {
                  id: item.id,
                  count: item.qty - 1 == 0 ? 1 : item.qty - 1,
                })
              "
              class="q-mx-sm"
              icon="remove"
              outline
            ></q-btn>
            <q-btn
              @click="
                this.$store.commit('changeQtyItemInCart', {
                  id: item.id,
                  count: item.qty + 1,
                })
              "
              class="q-mx-sm"
              icon="add"
              outline
            ></q-btn>
          </div>
          <q-btn
            @click="this.$store.commit('deleteItemFromCart', item.id)"
            icon="delete"
            color="red"
            outline
          ></q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </template>
  <div class="text-h6 text-center">
    Total: {{ this.$store.getters.getTotalCost }} USD
  </div>
</template>

<script></script>
