<template>
  <q-header bordered class="bg-primary text-white">
    <q-toolbar>
      <q-btn dense icon="menu" @click="leftDrawerOpen" />

      <q-toolbar-title>
        <div>
          <img
            style="margin-top: 10px; margin-left: 20px"
            src="./../assets/images/logo.png"
          />
        </div>
      </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>
  export default {
    emits: ['leftDrawerOpen'],
    setup(_, { emit }) {

      const leftDrawerOpen = () => {
        emit("leftDrawerOpen");
      };
      return { leftDrawerOpen };
    },
  };
</script>
