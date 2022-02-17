<template>
  <q-header bordered class="bg-primary text-white">
    <q-toolbar>
      <q-btn dense icon="menu" @click="$emit('toggleFilterDrawer')">
        <q-tooltip class="bg-accent">Brands filter</q-tooltip>
        </q-btn>

      <q-toolbar-title>
        <div>
          <img class="logoImg" src="./../assets/images/logo.png" />
        </div>
      </q-toolbar-title>
      <q-btn
        flat
        icon-right="local_grocery_store"
        label="cart"
        @click="$emit('openCart')"
      >
        <q-tooltip class="bg-accent">In cart {{ this.qtyItemsInCart }} items</q-tooltip>
        <q-badge v-if="this.qtyItemsInCart" color="red" floating> {{ this.qtyItemsInCart }} </q-badge>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
  ...mapGetters ([
      'qtyItemsInCart',
    ]),
  }
};
</script>

<style lang="sass">
.logoImg
  margin-top: 10px
  margin-left: 20px
</style>
