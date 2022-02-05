<template>
  <div class="q-pa-md">
    <!-- <q-btn label="Open Dialog" color="primary" @click="dialog = true" /> -->

    <q-dialog v-model="dialog"  @update:model-value="$emit('closeCart')">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar
            icon="local_grocery_store"
            color="primary"
            text-color="white"
          />
          <span class="q-ml-sm text-h6">In cart {{ countInCart }} items</span>
        </q-card-section>

        <q-card-section class="row items-center">
        </q-card-section>

        <!-- Notice v-close-popup -->
        <q-card-actions align="right">
          <q-btn  label="Buy" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
  // import { ref } from 'vue'

  export default {
    props: {
      dialog: Boolean,
      countInCart: Number,
    },
  };
</script>
