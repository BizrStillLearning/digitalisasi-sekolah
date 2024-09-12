<script setup>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import DataIndukSiswa from './views/DataIndukSiswa.vue';
import StudentForm from './components/StudentForm.vue';
import StudentTable from './components/StudentTable.vue';

</script>

<template>
  <<div class="flex flex-wrap w-screen box-content">
    <Sidebar />
    <StudentForm />
    <div class="flex-1 ml-64 mt-2">
      <Navbar />
      <h1 class="text-2xl font-bold">Pelajar</h1>
      <main class="p-2">
        <!-- Konten utama aplikasi -->
        <StudentTable />                
        
      </main>
    </div>
  </div>
</template>
