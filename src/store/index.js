import { createStore } from 'vuex';

export default createStore({
  state: {
    searchQuery: '',
    searchResults: [],
    currentPage: 1,
    itemsPerPage: 10,
  },
  getters: {
    paginatedResults(state) {
      const start = (state.currentPage - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return state.searchResults.slice(start, end);
    },
    totalPages(state) {
      return Math.ceil(state.searchResults.length / state.itemsPerPage);
    }
  },
  mutations: {
    setSearchQuery(state, query) {
      state.searchQuery = query;
    },
    setSearchResults(state, results) {
      state.searchResults = results;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    }
  },
  actions: {
    async search({ commit, dispatch }, query) {
      commit('setSearchQuery', query);
      const results = await dispatch('performSearch', query);
      commit('setSearchResults', results);
      commit('setCurrentPage', 1); // Reset to first page on new search
    },
    async performSearch({ state }, query) {
      // Implementasikan logika untuk memfilter atau mengambil hasil pencarian dari API
      // Misalnya, filter data yang ada di client-side atau ambil data dari API
      return []; // Kembalikan hasil pencarian yang sesuai
    },
    changePage({ commit }, page) {
      commit('setCurrentPage', page);
    }
  }
});
