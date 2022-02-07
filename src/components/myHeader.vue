<template>
  <q-header bordered class="bg-primary text-white">
    <q-toolbar>
      <q-btn dense icon="menu" @click="leftDrawerOpen" />

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
        <q-tooltip class="bg-accent">In cart {{ countItems }} items</q-tooltip>
        <q-badge color="red" floating> {{ countItems }} </q-badge>
      </q-btn>
    </q-toolbar>
  </q-header>
</template>

<script>
  export default {
    props: {
      countItems: Number,
      default: 0,
    },
    emits: ["leftDrawerOpen", "openCart"],
    setup(_, { emit }) {
      const leftDrawerOpen = () => {
        emit("leftDrawerOpen");
      };
      return { leftDrawerOpen };
    },
  };
</script>

<style lang="sass">
.logoImg
  margin-top: 10px
  margin-left: 20px
</style>
