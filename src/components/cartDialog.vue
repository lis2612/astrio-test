<template>
  <div class="q-pa-md">
    <q-dialog
      @update:model-value="$emit('closeCart')"
      maximized
      v-model="cartVisible"
    >
      <q-card class="my-card">
        <q-card-section
          class="row items-center"
          :class="{ 'justify-center': $q.platform.is.mobile }"
        >
          <q-avatar
            class="q-ml-lg q-mr-md"
            icon="local_grocery_store"
            color="primary"
            text-color="white"
          />
          <span
            v-if="this.$store.getters.qtyItemsInCart"
            class="q-ml-sm text-h6"
          >
            In cart {{ this.$store.getters.qtyItemsInCart }} items
          </span>
          <span v-else class="text-h6"> Cart is empty </span>
        </q-card-section>

        <template v-if="this.$store.getters.qtyItemsInCart">
          <desktopCart v-if="$q.platform.is.desktop"></desktopCart>
          <mobileCart v-if="$q.platform.is.mobile"></mobileCart>
        </template>
        <template v-else>
          <div class="text-h6 text-center">No items in cart</div>
        </template>

        <q-card-actions :align="[$q.platform.is.mobile ? 'evenly' : 'right']">
          <q-btn label="Cancel" color="primary" v-close-popup />
          <q-btn
            @click="buy"
            v-if="this.$store.getters.qtyItemsInCart"
            label="Buy"
            color="secondary"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import desktopCart from "./desktopCart.vue";
import mobileCart from "./mobileCart.vue";
export default {
  components:{desktopCart, mobileCart},
  props: {
    cartVisible: Boolean,
  },

  methods: {
    buy() {
      this.$q
        .dialog({
          title: 'Thank you for your purchase!',
          message: `You bought ${this.$store.getters.qtyItemsInCart} items worth $${this.$store.getters.getTotalCost}`,
        })
        .onOk(() => {
          this.$store.commit('clearShoppingCart');
        });
    },
  },
};
</script>
