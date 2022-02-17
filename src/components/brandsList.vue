<template>
  <q-list align="center" dense>
    <q-item>
      <q-item-section align="center" active="false" class="text-h6">
        Brands filter
      </q-item-section>
    </q-item>
    <q-separator></q-separator>
    <template v-for="menuItem in menuList" :key="menuItem.id">
      <q-item
        :class="{ 'text-weight-bold selItem': menuItem.checked }"
        :active="menuItem.checked === true"
        @click="setAndApplyFilter(menuItem.id)"
        class="text-subtitle1"
        clickable
      >
        <q-item-section align="left" style="display:inline">
            {{ menuItem.title }}
        </q-item-section>
        <q-item-section side top>
          <q-badge   color="blue-3" align="middle" > {{ this.$store.getters.qtyItemOfBrand(menuItem.id) }} </q-badge>
        </q-item-section>
      </q-item>
    </template>

    <q-btn
      @click="clearFilter"
      class="btn"
      color="primary"
      label="clear filter"
    />
  </q-list>
</template>

<script>
import { ref } from 'vue';
import { useStore } from "vuex";
import data from './../data/data';

export default {
  setup(_, { emit }) {
    const store = useStore();
    const menuList = ref(data.brandsData);

    clearFilter();

    function clearFilter() {
      menuList.value.forEach((item) => {
        item.checked = false;
      });
      store.commit('clearFilter');
    }

    function invertChecked(id) {
      for (const item of menuList.value) {
        if (item.id === id) {
          item.checked = !item.checked;
          break;
          }
      }
    }

    function applyFilter() {
      const filter = [];
      for (const item of menuList.value) {
        if (item.checked) {
          filter.push(item.id);
        }
      }
      store.commit('setFilter', filter);
    }

    function setAndApplyFilter(id) {
      invertChecked(id);
      applyFilter();
    }
    return {
      menuList,

      clearFilter,
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
