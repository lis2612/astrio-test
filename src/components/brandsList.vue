<template>
  <q-list>
    <q-item clickable :active="val === true" @click="selectAll" v-ripple>
      <q-item-section> {{ titleSelectAll }} </q-item-section>
    </q-item>
    <template v-for="(menuItem, index) in menuList" :key="index">
      <q-item
        clickable
        :active="menuItem.checked === true"
        @click="invertChecked(menuItem.id)"
        v-ripple
      >
        <q-item-section>
          {{ menuItem.title }}
        </q-item-section>
      </q-item>
      <q-separator :key="'sep' + index" v-if="menuItem.separator" />
    </template>
  </q-list>
</template>

<script>
  import { ref } from "vue";
  export default {
    setup() {
      const val = ref(true);
      const titleSelectAll=ref('Unselect all')
      const menuList = ref(
        JSON.parse(`[
                            {
                              "id": 1,
                              "title": "Brand 1",
                              "sort": "100",
                              "code": "brand_1"
                            },
                            {
                              "id": 2,
                              "title": "Brand 2",
                              "sort": "200",
                              "code": "brand_2"
                            },
                            {
                              "id": 3,
                              "title": "Brand 3",
                              "sort": "300",
                              "code": "brand_3"
                            },
                            {
                              "id": 4,
                              "title": "Brand 4",
                              "sort": "400",
                              "code": "brand_4"
                            },
                            {
                              "id": 5,
                              "title": "Brand 5",
                              "sort": "500",
                              "code": "brand_5"
                            },
                            {
                              "id": 6,
                              "title": "Brand 6",
                              "sort": "600",
                              "code": "brand_6"
                            },
                            {
                              "id": 7,
                              "title": "Brand 7",
                              "sort": "700",
                              "code": "brand_7"
                            },
                            {
                              "id": 8,
                              "title": "Brand 8",
                              "sort": "700",
                              "code": "brand_8"
                            },
                            {
                              "id": 9,
                              "title": "Brand 9",
                              "sort": "900",
                              "code": "brand_9"
                            }
                          ]`)
      );
      for (const item of menuList.value) {
        item.checked = true;
      }

      return {
        menuList,
        val,
        titleSelectAll,

        selectAll() {
          if (val.value === true) {
            for (const item of menuList.value) {
              item.checked = false;
            }
            val.value = false;
            titleSelectAll.value='Select all';
          } else {
            for (const item of menuList.value) {
              item.checked = true;
            }
            val.value = true;
            titleSelectAll.value='Unselect all';
          }
        },
        invertChecked(id) {
          for (const item of menuList.value) {
            if (item.id === id) item.checked = !item.checked;
            // titleSelectAll='Select all'
          }
        },
      };
    },
  };
</script>

