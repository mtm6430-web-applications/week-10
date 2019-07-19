import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    }
  },
  actions: {
    fetchData({ commit }) {
      axios
        .get("https://sharmaa-week-10.firebaseio.com/products.json")
        .then(response => {
          console.log(response.data);
          commit("SET_PRODUCTS", response.data);
        });
    }
  }
});
// https://sharmaa-week-10.firebaseio.com/
