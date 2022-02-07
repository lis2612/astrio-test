<template>
  <q-list align="center" dense>
    <q-item>
      <q-item-section align="center" active="false" class="text-h6">
        Brands filter</q-item-section
      >
    </q-item>
    <q-separator></q-separator>
    <template v-for="(menuItem, index) in menuList" :key="index">
      <q-item

        class="text-subtitle1"
        :class="{'text-weight-bold selItem': menuItem.checked}"
        clickable
        :active="menuItem.checked === true"
        @click="setAndApplyFilter(menuItem.id)"
      >
        <q-item-section align="left">
          {{ menuItem.title }}
        </q-item-section>
      </q-item>
    </template>

    <q-btn
      class="btn"
      color="primary"
      label="clear filter"
      @click="clearFilter"
    />
  </q-list>
</template>

<script>
  import { ref } from "vue";
  import data from "./../data/data";
  export default {
    setup(_, { emit }) {
      const menuList = ref(data.brandsData);
      clearFilter();

      function clearFilter() {
        menuList.value.forEach((item) => {
          item.checked = false;
        });
        applyFilter();
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
      function setAndApplyFilter(id) {
        invertChecked(id);
        applyFilter();
      }
      return {
        menuList,

        invertChecked,
        clearFilter,
        applyFilter,
        setAndApplyFilter,
      };
    },
  };
</script>


<style lang="sass">
.btn
  margin-top: 10px
.selItem
  background-color: #E5E7E9

</style>
