<template>
  <div class="p-4 container min-w-screen w-full mx-20 -ml-20">
    <div class="container w-screen -mx-40">
      <StudentForm @search-query="handleSearchQuery" />
    </div>
    <div class="overflow-x-auto">
      <div class="p-4">
        <select v-model="itemsPerPage" @change="goToPage(1)" id="itemsPerPage" class="p-1 border border-gray-300 rounded">
          <option v-for="limit in [2, 3, 5, 10]" :key="limit" :value="limit">{{ limit }}</option>
        </select>
      </div>
      <h1 class="text-2xl font-bold p-4">Pelajar</h1>
      <table class="min-w-full bg-white border border-gray-200">
        <thead class="bg-gray-200">
          <tr>
            <th class="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">%</th>
            <th class="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">NIS</th>
            <th class="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Nama</th>
            <th class="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Kelas</th>
            <th class="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Jurusan</th>
            <th class="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Status</th>
            <th class="px-4 py-2 border-b text-left text-sm font-semibold text-gray-700">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(siswa, index) in paginatedData" :key="siswa.nis" class="hover:bg-gray-100">
            <td class="px-4 py-2 border-b text-sm text-gray-800">{{ index + 1 + ((currentPage - 1) * itemsPerPage) }}</td>
            <td class="px-4 py-2 border-b text-sm text-gray-800">{{ siswa.nis }}</td>
            <td class="px-4 py-2 border-b text-sm text-gray-800">{{ siswa.nama }}</td>
            <td class="px-4 py-2 border-b text-sm text-gray-800">{{ siswa.kelas }}</td>
            <td class="px-4 py-2 border-b text-sm text-gray-800">{{ siswa.jurusan }}</td>
            <td class="px-4 py-2 border-b text-sm text-center">
              <label class="inline-flex items-center me-5 cursor-pointer">
                <input type="checkbox" :checked="siswa.status === 'Aktif'" class="sr-only peer" @change="toggleStatus(siswa)">
                <div class="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
              </label>
            </td>
            <td class="px-4 py-2 border-b text-sm text-blue-500">
              <button class="text-blue-500 hover:underline">Edit</button>
              <button class="text-red-500 hover:underline ml-2">Hapus</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="p-4">
        <div class="flex items-center justify-between p-4">
          <div>
            <span class="ml-2 text-sm">Showing {{ paginatedData.length }} of {{ totalData }} entries</span>
          </div>
        </div>

        <div class="flex items-center justify-center mt-4 -space-x-px">
          <button
            @click="goToPage(currentPage - 1)"
            :disabled="currentPage === 1"
            class="px-4 py-2 mx-1 text-white bg-gray-800 rounded hover:bg-teal-700 hover:text-gray-800 transition ease-in-out duration-500 disabled:opacity-50"
          >
            Previous
          </button>
    
          <span v-for="page in totalPages" :key="page" class="mx-1">
            <button
              @click="goToPage(page)"
              :class="{
                'px-4 py-2 mx-1 text-white bg-gray-800 rounded': currentPage === page,
                'px-4 py-2 mx-1 bg-white rounded hover:text-white hover:bg-gray-800 transition ease-in-out duration-500 leading-tight': currentPage !== page
              }"
            >
              {{ page }}
            </button>
          </span>
    
          <button
            @click="goToPage(currentPage + 1)"
            :disabled="currentPage === totalPages"
            class="px-4 py-2 mx-1 text-white bg-gray-800 rounded hover:bg-teal-700 hover:text-gray-800 transition ease-in-out duration-500 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import StudentForm from './StudentForm.vue';

export default {
  name: 'StudentTable',
  components: { StudentForm },
  data() {
    return {
      siswaData: [
        { nis: "123456", nama: "Adam Nasrulloh", kelas: "XII", jurusan: "Rekayasa Perangkat Lunak", status: true },
        { nis: "654321", nama: "Achmad Labib Haikal Ilyasin", kelas: "XI", jurusan: "Multimedia", status: true },
        { nis: "030607", nama: "Abidzar Dzakwan Sahudi", kelas: "XII", jurusan: "Rekayasa Perangkat Lunak", status: true },
        { nis: "070603", nama: "M, Rifai Fathan", kelas: "XI", jurusan: "Teknik Komputer Jaringan", status: true },
        { nis: "234234", nama: "Nur Akmal Mustofa", kelas: "XII", jurusan: "Multimedia", status: true },
        { nis: "343434", nama: "Anies Baswedan", kelas: "X", jurusan: "Rekayasa Perangkat Lunak", status: true },
        { nis: "121212", nama: "Muhammad Abdullah Al Hasan", kelas: "XI", jurusan: "Multimedia", status: true },
        { nis: "433211", nama: "M. Rizkhi Alfandi Nata", kelas: "XII", jurusan: "Rekayasa Perangkat Lunak", status: true },
        { nis: "443322", nama: "Joko Widodo", kelas: "X", jurusan: "Multimedia", status: true },
        { nis: "987643", nama: "Muhammad Soeharto", kelas: "XII", jurusan: "Teknik Komputer Jaringan", status: true },
        { nis: "20224", nama: "Rahmat Megumi", kelas: "XII", jurusan: "Teknik Komputer Jaringan", status: true },
        { nis: "110924", nama: "Maki Humaira Zenin", kelas: "X", jurusan: "Multimedia", status: true },
        { nis: "070911", nama: "Satoru Rehan", kelas: "XI", jurusan: "Teknik Komputer Jaringan", status: true },
        { nis: "105354", nama: "Cahaya Nur Light Hikari", kelas: "XI", jurusan: "Multimedia", status: true },
        { nis: "032286", nama: "Rangga Sedang Mengetik", kelas: "XII", jurusan: "Rekayasa Perangkat Lunak", status: true },
        { nis: "171205", nama: "Achmad Rizal Fairuz", kelas: "XII", jurusan: "Rekayasa Perangkat Lunak", status: true },
        { nis: "191009", nama: "M. Azril Afanin Afif", kelas: "X", jurusan: "Multimedia", status: true },
        { nis: "132286", nama: "M Satria Surya ALmaggfirullah", kelas: "XII", jurusan: "Teknik Komputer Jaringan", status: true },
        { nis: "132287", nama: "M Zainurrohim", kelas: "XI", jurusan: "Multimedia", status: true },
        { nis: "190322", nama: "Ashter Bin Ashwin", kelas: "X", jurusan: "Multimedia", status: true },
      ],
      currentPage: 1,
      itemsPerPage: 2,
      searchQuery: '',
    };
  },
  computed: {
    filteredData() {
      if (!this.searchQuery) return this.siswaData;
      return this.siswaData.filter(siswa =>
        siswa.nama.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        siswa.nis.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        siswa.kelas.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    totalPages() {
      return Math.ceil(this.filteredData.length / this.itemsPerPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.filteredData.slice(start, end);
    },
    totalData() {
      return this.filteredData.length;
    },
  },
  methods: {
    handleSearchQuery(query) {
      this.searchQuery = query;
      this.debouncedSearch();
    },
    toggleStatus(siswa) {
      siswa.status = siswa.status === 'Aktif' ? 'Tidak Aktif' : 'Aktif';
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    debouncedSearch: _.debounce(function () {
      this.goToPage(1);
    }, 1500),
  },
};
</script>
