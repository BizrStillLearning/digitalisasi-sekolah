<template>
  <div class="container w-full mb-3 p-3 mx-20 flex justify-center space-x-6 border-b mt-20 bg-gray-200 divide-x-0">
    <a href="#" class="font-medium text-base text-gray-700 hover:text-teal-600 transition ease-in-out duration-500 hover:bg-gray-200">Peserta Didik</a>
    <a href="#" class="font-medium text-base text-gray-700 hover:text-teal-600 transition ease-in-out duration-500 hover:bg-gray-200">Guru & Tendik</a>
    <a href="#" class="font-medium text-base text-gray-700 hover:text-teal-600 transition ease-in-out duration-500 hover:bg-gray-200">Validasi Data</a>
  </div>
  <div class="container max-w-screen w-full px-40 mx-20 flex justify-between items-center p-8 bg-gray-200 overflow-x-hidden divide-x-0">
    <div class="flex flex-wrap w-full">
      <div class="relative w-full px-9 mx-4">
        <div class="flex items-center border-none rounded-lg bg-white">
          <i class="fas fa-search text-gray-500 px-3"></i>
          <input 
            type="search" 
            placeholder="Cari Nama, NIS, atau Kelas" 
            class="py-2 w-full border-none focus:outline-none focus:ring-2 "
            v-model="query"
            @input="debouncedSearch"
          />
        </div>

        <div v-if="suggestions.length" class="mt-2 bg-white border rounded-lg shadow-lg max-h-40 overflow-y-auto">
          <ul>
            <li 
              v-for="(suggestion, index) in suggestions" 
              :key="index" 
              class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {{ suggestion.nis }} - {{ suggestion.nama }} - {{ suggestion.kelas }} ({{ suggestion.jurusan }})
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-row p-4">
        <div class="grid grid-cols-2 gap-4 p-4">
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
        <div class="grid grid-cols-2 gap-4 p-4">
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
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'BukuInduk',
  data() {
    return {
      selectedOption: '',
      options: [
        { value: '', text: 'Semua Kelas' },
        { value: 'option1', text: 'Kelas X' },
        { value: 'option2', text: 'Kelas XI' },
        { value: 'option3', text: 'Kelas XII' }
      ],
      selectedJurusan: '',
      jurusan: [
        { value: '', text: 'Semua Jurusan' },
        { value: 'option1', text: 'Rekayasa Perangkat Lunak' },
        { value: 'option2', text: 'Multimedia' },
        { value: 'option3', text: 'Teknik Komputer Jaringan' },
      ],
      query: '', 
      suggestions: [], 
      siswaData: [
        { nis: "123456", nama: "Ahmad Ban Mobil", kelas: "XII", jurusan: "Rekayasa Perangkat Lunak", status: true },
        { nis: "654321", nama: "Rehan Ban Dalam", kelas: "XI", jurusan: "Multimedia", status: true },
        { nis: "030607", nama: "Abidzar Dzakwan Sahudi", kelas: "XII", jurusan: "Rekayasa Perangkat Lunak", status: true },
        { nis: "070603", nama: "Farhan Kebab", kelas: "XI", jurusan: "Teknik Komputer Jaringan", status: true },
        { nis: "234234", nama: "Riski Tambal Ban", kelas: "XII", jurusan: "Multimedia", status: true },
        { nis: "343434", nama: "Anies Baswedan", kelas: "X", jurusan: "Rekayasa Perangkat Lunak", status: true },
        { nis: "121212", nama: "Rizal Signature", kelas: "XI", jurusan: "Multimedia", status: true },
        { nis: "433211", nama: "Jotaro Kujo", kelas: "XII", jurusan: "Rekayasa Perangkat Lunak", status: true },
        { nis: "443322", nama: "Joko Widodo", kelas: "X", jurusan: "Multimedia", status: true },
        { nis: "987643", nama: "Muhammad Soeharto", kelas: "XII", jurusan: "Teknik Komputer Jaringan", status: true },
        { nis: "20224", nama: "Rahmat Megumi", kelas: "XII", jurusan: "Teknik Komputer Jaringan", status: true },
        { nis: "110924", nama: "Maki Humaira Zenin", kelas: "X", jurusan: "Multimedia", status: true },
        { nis: "070911", nama: "Satoru Rehan", kelas: "XI", jurusan: "Teknik Komputer Jaringan", status: true },
        { nis: "105354", nama: "Cahaya Nur Light Hikari", kelas: "XI", jurusan: "Multimedia", status: true },
        { nis: "032286", nama: "Rangga Sedang Mengetik", kelas: "XII", jurusan: "Rekayasa Perangkat Lunak", status: true },
      ],
    };
  },
  methods: {
  search() {
    if (this.query.trim()) {
      const queryLower = this.query.toLowerCase();
      this.suggestions = this.siswaData.filter(siswa =>
        siswa.nama.toLowerCase().startsWith(queryLower) || // Mencari berdasarkan huruf depan nama
        siswa.nis.startsWith(this.query) || // Menambahkan kondisi jika pencarian berdasarkan NIS
        siswa.kelas.startsWith(this.query)  // Menambahkan kondisi jika pencarian berdasarkan kelas
      );
    } else {
      this.suggestions = [];
    }
  },
  },
  created() {
    this.debouncedSearch = _.debounce(this.search, 1500);
  }
}
</script>
>
