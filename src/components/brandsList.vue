<template>
  <q-list align="center">
    <q-item clickable :active="val === true" @click="selectAll" v-ripple>
      <q-item-section align="center"> {{ titleSelectAll }} </q-item-section>
    </q-item>
    <q-separator></q-separator>
    <template v-for="(menuItem, index) in menuList" :key="index">
      <q-item
        clickable
        :active="menuItem.checked === true"
        @click="invertChecked(menuItem.id)"
      >
        <q-item-section align="left">
          {{ menuItem.title }}
        </q-item-section>
      </q-item>
      <!-- <q-separator :key="'sep' + index" v-if="menuItem.separator" /> -->
    </template>

    <q-btn
      padding="5px 100px"
      color="primary"
      label="apply"
      @click="applyFilter"
    />
  </q-list>
</template>

<script>
  import { ref } from "vue";
  import data from "./../data/data";
  export default {
    setup(_, { emit }) {
      const val = ref(true);
      const titleSelectAll = ref("Unselect all");
      const menuList = ref(data.brandsData);

      for (const item of menuList.value) {
        item.checked = true;
      }
      function selectAll() {
        if (val.value === true) {
          for (const item of menuList.value) {
            item.checked = false;
          }
          val.value = false;
          titleSelectAll.value = "Select all";
        } else {
          for (const item of menuList.value) {
            item.checked = true;
          }
          val.value = true;
          titleSelectAll.value = "Unselect all";
        }
      }
      function invertChecked(id) {
        for (const item of menuList.value) {
          if (item.id === id) item.checked = !item.checked;
        }
      }
      function applyFilter() {
        const filter = [];
        for (const item of menuList.value) {
          if (item.checked) {
            filter.push(item.id);
          }
        }
        emit("applyFilter", filter);
      }
      return {
        menuList,
        val,
        titleSelectAll,

        selectAll,
        invertChecked,
        applyFilter,
      };
    },
  };
</script>

