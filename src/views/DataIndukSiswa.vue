<template>
  <<div class="flex flex-wrap w-screen">
    <Sidebar />
    <MainNavbar />
    <div class="flex-1 ml-64 mt-2">
      <Navbar />
      <main class="p-2">
        <!-- Konten utama aplikasi -->
      <StudentTable /> 
        
      </main>
    </div>
  </div>
</template>

<script >
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import MainNavbar from '@/components/MainNavbar.vue';
import StudentForm from '@/components/StudentForm.vue';
import StudentTable from '@/components/StudentTable.vue';
import _ from 'lodash';
import { mapGetters, mapActions } from 'vuex';


export default {
  components: {
    StudentForm,
    StudentTable,
    Navbar,
    Sidebar,
    MainNavbar,
  },
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    handleSearchQuery(query) {
      this.searchQuery = query;
    }
  }
}
</script>
