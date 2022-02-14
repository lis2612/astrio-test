<template>
  <div class="q-pa-md">
    <q-dialog
      @update:model-value="$emit('closeCart')"
      maximized
      v-model="dialog"
    >
      <q-card class="my-card">
        <q-card-section class="row items-center">
          <q-avatar
            icon="local_grocery_store"
            color="primary"
            text-color="white"
          />
          <span v-if="itemsInCart.length" class="q-ml-sm text-h6">
            In cart {{ countInCart }} items
          </span>
          <span v-else class="text-h6"> Cart is empty </span>
        </q-card-section>

        <template v-if="itemsInCart.length">
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
              <template v-for="item of cart" :key="item.id">
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
                    {{
                      item.regular_price.value +
                      ' ' +
                      item.regular_price.currency
                    }}
                  </td>
                  <td class="text-center">
                    <input
                      :value="getItemsCount(item.id)"
                      :id="item.id"
                      @change="changeCount"
                      class="input w50"
                      type="number"
                      min="1"
                    />
                  </td>
                  <td class="text-center">
                    {{
                      (
                        getItemsCount(item.id) * item.regular_price.value
                      ).toFixed(2) +
                      ' ' +
                      item.regular_price.currency
                    }}
                  </td>
                  <td class="text-right">
                    <q-btn
                      @click="$emit('deleteItem', item.id)"
                      color="primary"
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
                <td class="text-center text-weight-bolder subtotal">
                  Subtotal
                </td>
                <td class="text-center text-weight-bolder subtotal">
                  {{ getTotalCost }} USD
                </td>
                <td class="text-right"></td>
              </tr>
            </tbody>
          </q-markup-table>
        </template>

        <!-- Notice v-close-popup -->
        <q-card-actions align="right">
          <q-btn label="Cancel" color="primary" v-close-popup />
          <q-btn
            @click="buy"
            v-if="itemsInCart.length"
            label="Buy"
            color="primary"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    countInCart: Number,
    itemsInCart: Array,
    productList: Array,
  },

  computed: {
    cart() {
      let items = [];
      for (const item of this.itemsInCart) {
        for (const product of this.productList) {
          if (item.id == product.id) {
            items.push(product);
          }
        }
      }
      return items;
    },
    getTotalCost() {
      let total = 0;
      this.cart.forEach((item) => {
        total = total + this.getItemsCount(item.id) * item.regular_price.value;
      });
      return total.toFixed(2);
    },
  },
  methods: {
    buy() {
      this.cart.forEach((item) => this.$emit('deleteItem', item.id));
      alert('Thank you for your purchase!');
    },
    getItemsCount(id) {
      return this.itemsInCart.filter((item) => item.id == id)[0].count;
    },
    changeCount(e) {
      this.$emit('changeCount', e.target.id, e.target.valueAsNumber);
    },
  },
};
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
