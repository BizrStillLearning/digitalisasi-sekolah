// src/stores/searchStore.js
import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', {
  state: () => ({
    searchQuery: '',
    searchResults: []
  }),
  actions: {
    setSearchQuery(query) {
      this.searchQuery = query;
    },
    setSearchResults(results) {
      this.searchResults = results;
    }
  }
});
