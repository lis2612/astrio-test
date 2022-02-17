import { createStore } from 'vuex';
import data from './../data/data';

function getItemByIdFromProductList(itemId) {
  return store.state.productList.filter((item) => item.id == itemId)[0];
}
const store = createStore({
  state() {
    return {
      productList: data.productData,
      activeFilter: [],
      shoppingCart: [],
    };
  },
  getters: {
    qtyItemOfBrand: (state) => (brandId) => {
      let qty = 0;
      for (const item of state.productList) {
        if (item.brand == brandId) {
          qty++;
        }
      }
      return qty;
    },
    filteredList(state) {
      if (state.activeFilter.length < 1) {
        return state.productList;
      }
      let list = [];
      for (const item of state.activeFilter) {
        for (const card of state.productList) {
          if (card.brand == item) {
            list.push(card);
          }
        }
      }
      return list;
    },
    qtyItemsInCart(state) {
      return state.shoppingCart.length;
    },
    getTotalCost(state) {
      let total = 0;
      state.shoppingCart.forEach((item) => {
        total = total + item.qty * item.regular_price.value;
      });
      return total.toFixed(2);
    },
  },

  actions: {},
  mutations: {
    setFilter(state, filterArr) {
      state.activeFilter = filterArr;
    },
    clearFilter(state) {
      state.activeFilter = [];
    },
    addItemToCart(state, itemToCart) {
      let indx = state.shoppingCart.findIndex(
        (item) => item.id == itemToCart.id
      );
      if (indx == -1) {
        let addingItem = getItemByIdFromProductList(itemToCart.id);
        addingItem.qty = 1;
        state.shoppingCart.push(addingItem);
      } else {
        state.shoppingCart[indx].qty += 1;
      }
    },
    changeQtyItemInCart(state, itemInCart) {
      let indx = state.shoppingCart.findIndex(
        (item) => item.id == itemInCart.id
      );
      state.shoppingCart[indx].qty = itemInCart.count;
    },
    deleteItemFromCart(state, itemId) {
      state.shoppingCart = state.shoppingCart.filter(
        (item) => item.id != itemId
      );
    },
    clearShoppingCart(state) {
      state.shoppingCart = [];
    },
  },
});

export default store;
