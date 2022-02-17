<template>
  <q-markup-table separator="horizontal">
    <thead>
      <tr>
        <th class="text-left w150"></th>
        <th class="text-left">Item</th>
        <th class="text-center w100">Price</th>
        <th class="text-center w100">Qty</th>
        <th class="text-center w100">Total</th>
        <th class="text-center w50"></th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item of this.$store.state.shoppingCart" :key="item.id">
        <tr>
          <td class="text-left">
            <q-img
              fit="contain"
              class="itemImg"
              :src="'src/assets' + item.image"
            >
            </q-img>
          </td>
          <td class="text-left">
            {{ item.title + ` / Brand ` + item.brand }}
          </td>
          <td class="text-center">
            {{ item.regular_price.value + ' ' + item.regular_price.currency }}
          </td>
          <td class="text-center">
            <input
              :value="item.qty"
              :id="item.id"
              @change="changeCount"
              class="input w50"
              type="number"
              min="1"
            />
          </td>
          <td class="text-center">
            {{
              (item.qty * item.regular_price.value).toFixed(2) +
              ' ' +
              item.regular_price.currency
            }}
          </td>
          <td class="text-right">
            <q-btn
              @click="this.$store.commit('deleteItemFromCart', item.id)"
              color="red"
              icon="delete"
              flat
            ></q-btn>
          </td>
        </tr>
      </template>
      <tr>
        <td class="text-left"></td>
        <td class="text-left"></td>
        <td class="text-center"></td>
        <td class="text-center text-weight-bolder subtotal">Subtotal</td>
        <td class="text-center text-weight-bolder subtotal">
          {{ this.$store.getters.getTotalCost }} USD
        </td>
        <td class="text-right"></td>
      </tr>
    </tbody>
  </q-markup-table>
</template>

<script>
export default {
  methods: {
    changeCount(e) {
      this.$store.commit('changeQtyItemInCart', {
        id: e.target.id,
        count: e.target.valueAsNumber,
      });
    },
  },
}
</script>

<style lang="sass" scoped>
.subtotal
  font-size: larger
.input
  text-align: right
  border: none
.w50
  width: 50px
.w100
  width: 100px
.w150
  width: 150px
.itemImg
  min-height: 100px
  min-width: 30px
</style>
