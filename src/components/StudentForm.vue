<template>
  <div class="min-w-full px-40 mx-20 flex justify-between items-center p-8 bg-gray-200 overflow-x-hidden divide-x-0">
    <div class="flex flex-row w-full">
      <div class="grid grid-cols-2 gap-4">
        <div class="flex items-center border-none rounded-lg bg-white">
          <i class="fas fa-search text-gray-500 px-3"></i>
          <input 
            type="search" 
            placeholder="Cari Nama, NIS, atau Kelas" 
            class="py-2 w-full border-none focus:outline-none focus:ring-2"
            v-model="query"
            @input="debouncedSearch"
          />
        </div>

        <select id="select-option" v-model="selectedOption" class="sticky p-2 w-full border rounded-lg focus:outline-none">
          <option v-for="option in options" :key="option.value" :value="option.value">
            {{ option.text }}
          </option>
        </select>

        <select class="p-2 w-full border rounded-lg focus:outline-none">
          <option value="">Pilih Status</option>
          <option value="aktif">Aktif</option>
          <option value="tidak-aktif">Tidak Aktif</option>
        </select>

        <select id="select-option" v-model="selectedJurusan" class="p-2 w-full border rounded-lg focus:outline-none">
          <option v-for="jurusan in jurusan" :key="jurusan.value" :value="jurusan.value">
            {{ jurusan.text }}
          </option>
        </select>
      </div>

      <div class="grid grid-cols-2 gap-4 px-8">
        <button class="p-2 bg-gray-800 rounded hover:bg-teal-600 hover:text-gray-800 transition ease-in-out duration-500 text-white">
          <i class="fas fa-file"></i>
          <span class="p-1">Import Excel</span>
        </button>
        <button class="p-2 bg-gray-800 rounded hover:bg-teal-600 hover:text-gray-800 transition ease-in-out duration-500 text-white">Lihat Dokumen</button>
        <button class="p-2 bg-gray-800 rounded hover:bg-teal-600 hover:text-gray-800 transition ease-in-out duration-500 text-white">
          <i class="fas fa-plus-circle"></i>
          <span class="p-1">Tambah</span>
        </button>
        <button class="p-2 bg-gray-800 rounded hover:bg-teal-600 hover:text-gray-800 transition ease-in-out duration-500 text-white">Data Arsip</button>
      </div>
    </div>
  </div>
</template>


<script>
import _ from 'lodash';
import { mapActions, mapState } from 'vuex'; // Import mapState untuk memetakan state dari Vuex

export default {
  name: 'StudentForm',
  data() {
    return {
      selectedOption: '',
      options: [
        { value: '', text: 'Semua Kelas' },
        { value: 'X', text: 'Kelas X' },
        { value: 'XI', text: 'Kelas XI' },
        { value: 'XII', text: 'Kelas XII' }
      ],
      selectedJurusan: '',
      jurusan: [
        { value: '', text: 'Semua Jurusan' },
        { value: 'RPL', text: 'Rekayasa Perangkat Lunak' },
        { value: 'MM', text: 'Multimedia' },
        { value: 'TKJ', text: 'Teknik Komputer Jaringan' }
      ], 
      query: '',
    };
  },
  computed: {
    // Pemetaan state dari Vuex menggunakan mapState
    ...mapState({
      searchResults: state => state.search.searchResults
    })
  },
  methods: {
    // Pemetaan action dari Vuex untuk melakukan pencarian
    ...mapActions(['search']),
    
    search() {
      this.$emit('search-query', this.query);
    },

    getSuggestions(query) {
      // Implementasi logika pencarian
      return this.siswaData.filter(student =>
        student.nama.toLowerCase().includes(query.toLowerCase()) ||
        student.nis.toLowerCase().includes(query.toLowerCase()) ||
        student.kelas.toLowerCase().includes(query.toLowerCase()) ||
        student.jurusan.toLowerCase().includes(query.toLowerCase())
      );
    }
  },
  created() {
    this.debouncedSearch = _.debounce(this.search, 1500); // Debounce search method
  }
}
</script>


