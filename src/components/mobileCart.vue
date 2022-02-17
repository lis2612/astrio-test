<template>
  <template v-for="item in this.$store.state.shoppingCart" :key="item.id">
    <div class="my-card q-px-md q-py-xs col-grow">
      <q-card align="right">
        <q-card-section horizontal>
          <q-img :src="'src/assets' + item.image"></q-img>
          <div class="col-8 q-pa-xs q-pr-md">
            <div class="text-h6">{{ item.title }}</div>
            <div class="text-body2">Brand: {{ item.brand }}</div>
            <div class="text-body2">
              Price:
              {{
                item.regular_price.value.toFixed(2) +
                ' ' +
                item.regular_price.currency
              }}
            </div>
            <div class="text-body2">Qty in cart: {{ item.qty }}</div>
          </div>
        </q-card-section>
        <q-separator></q-separator>


        <q-card-actions class="q-pr-md justify-between" align="right" bordered>
          <div class="text-body1">
            Subtotal: ${{ (item.qty * item.regular_price.value).toFixed(2) }}
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
  <q-separator class="q-mt-md"></q-separator>
  <div class="q-my-md q-mt-md text-h6 text-center">
    Total: {{ this.$store.getters.getTotalCost }} USD
  </div>
</template>

<script></script>
