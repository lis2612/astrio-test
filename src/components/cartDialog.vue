<template>
  <div class="q-pa-md">
    <q-dialog
      maximized
      v-model="dialog"
      @update:model-value="$emit('closeCart')"
    >
      <q-card class="my-card">
        <q-card-section class="row items-center">
          <q-avatar
            icon="local_grocery_store"
            color="primary"
            text-color="white"
          />
          <span v-if="!emptyCart" class="q-ml-sm text-h6">
            In cart {{ countInCart }} items
          </span>
          <span v-else class="text-h6"> Cart is empty </span>
        </q-card-section>

        <template v-if="!emptyCart">
          <q-markup-table separator="horizontal">
            <thead>
              <tr>
                <th class="text-left" style="width: 150px"></th>
                <th class="text-left">Item</th>
                <th class="text-center" style="width: 100px">Price</th>
                <th class="text-center" style="width: 100px">Qty</th>
                <th class="text-center" style="width: 100px">Total</th>
                <th class="text-center" style="width: 50px"></th>
              </tr>
            </thead>
            <tbody>
              <template v-for="item of cart" :key="item.id">
                <tr>
                  <td class="text-left">
                    <q-img
                      fit="contain"
                      style="min-height: 100px; min-width: 30px"
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
                      " " +
                      item.regular_price.currency
                    }}
                  </td>
                  <td class="text-center">
                    <input
                      :id="item.id"
                      type="number"
                      min="1"
                      style="text-align: right; width: 50px; border: none"
                      :value="getItemsCount(item.id)"
                      @change="changeCount"
                    />
                  </td>
                  <td class="text-center">
                    {{
                      (
                        getItemsCount(item.id) * item.regular_price.value
                      ).toFixed(2) +
                      " " +
                      item.regular_price.currency
                    }}
                  </td>
                  <td class="text-right">
                    <q-btn
                      flat
                      color="primary"
                      icon="delete"
                      @click="$emit('deleteItem', item.id)"
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
            v-if="itemsInCart.length"
            label="Buy"
            color="primary"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
  import cartItem from "./cartItem.vue";
  export default {
    components: { cartItem },
    props: {
      dialog: Boolean,
      countInCart: Number,
      itemsInCart: Array,
      productList: Array,
    },
    data() {
      return {
        isEmptyCart: true,
      };
    },
    computed: {
      emptyCart() {
        if (this.itemsInCart.length) {
          this.isEmptyCart = false;
        } else this.isEmptyCart = true;
        return this.isEmptyCart;
      },
      cart() {
        let items = [];
        for (const it of this.itemsInCart) {
          for (const product of this.productList) {
            if (it.id == product.id) {
              items.push(product);
            }
          }
        }
        return items;
      },
      getTotalCost() {
        let total = 0;
        for (const item of this.cart) {
          total = total + this.getItemsCount(item.id) * item.regular_price.value;
        }
        return total.toFixed(2);
      },
    },
    methods: {
      getItemsCount(id) {
        return this.itemsInCart.filter((item) => item.id == id)[0].count;
      },
      changeCount(e) {
        this.$emit("changeCount", e.target.id, e.target.valueAsNumber);
      },
    },
  };
</script>

<style lang="sass" scoped>
.subtotal
  font-size: larger
</style>
