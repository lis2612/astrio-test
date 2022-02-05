<template>
  <!-- table head -->
  <template v-if="head=true">

  </template>

  <!-- table data -->
  <template v-if="head!=true">
    
  </template>
</template>

<script>
  export default {
    props: [
      {
        tHead: Boolean,
      },
    ],
  };
</script>

<style lang="sass" scoped>
</style>
