<template>
    <aside class="fixed top-16 left-0 w-64 h-full bg-gray-900 text-white shadow-lg px-4 mb-4 overflow-y-auto z-30">
      <!-- Sidebar Content -->
      <div>
        <!-- Beranda Section -->
        <div class="mb-6">
            <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-900  hover:text-teal-700 mb-2 pt-6">
                <i class="fas fa-home mr-2"></i>
                <span>Beranda</span>
            </a>
          <p class="mb-4 text-gray-400">Data Induk Sekolah</p>
          <ul>
            <li class="mb-2">
              <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-900 hover:text-teal-700">
                <i class="fas fa-book mr-2"></i>
                <span>Buku Induk</span>
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-900 hover:text-teal-700">
                <i class="fas fa-school mr-2"></i>
                <span>Sekolah</span>
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-900 hover:text-teal-700">
                <i class="fas fa-calendar mr-2"></i>
                <span>Agenda Surat</span>
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-900 hover:text-teal-700">
                <i class="fas fa-calendar mr-2"></i>
                <span>Kalender Sekolah</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- Layanan Akademik Section -->
        <div class="mb-6">
          <p class="mb-4 text-gray-400">Layanan Akademik</p>
          <ul>
            <li class="mb-2">
              <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-900 hover:text-teal-700">
                <i class="fas fa-chalkboard-teacher mr-2"></i>
                <span>Asesmen</span>
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-900 hover:text-teal-700">
                <i class="fas fa-book-reader mr-2"></i>
                <span>Pembelajaran</span>
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-900 hover:text-teal-700">
                <i class="fas fa-book mr-2"></i>
                <span>Tata Tertib Sekolah</span>
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-900 hover:text-teal-700">
                <i class="fas fa-landmark mr-2"></i>
                <span>Kelas Eligible</span>
                <i class="fas fa-lock text-black ml-2"></i>
            </a>
            </li>
          </ul>
        </div>
        <div>
          <p class="mb-4 text-gray-400">Layanan Statistik</p>
          <ul>
            <li class="mb-2">
              <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-900 hover:text-teal-700">
                <i class="fas fa-id-card mr-2"></i>
                <span>Kartu Pelajar</span>
              </a>
            </li>
            <li class="mb-2">
                <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-900 hover:text-teal-700">
                  <i class="fas fa-clipboard-list mr-2"></i>
                  <span>Presensi dan Jurnal</span>
                </a>
              </li>
              <li class="mb-2 flex items-center">
                <a href="#" class="flex-grow flex items-center p-2 rounded-lg hover:bg-gray-900 hover:text-teal-700">
                  <i class="fas fa-user-tie mr-2"></i>
                  <span>Buku Tamu</span>
                </a>
                <i class="fas fa-lock text-black ml-2"></i> <!-- Lock Icon -->
              </li>
              <li class="mb-2 flex items-center">
                <a href="#" class="flex-grow flex items-center p-2 rounded-lg hover:bg-gray-900 hover:text-teal-700">
                  <i class="fas fa-poll mr-2"></i>
                  <span>Survey Penilaian</span>
                </a>
                <i class="fas fa-lock text-black ml-2"></i> <!-- Lock Icon -->
              </li>
              <li class="mb-2">
                <a href="#" class="flex items-center p-2 rounded-lg hover:bg-gray-900 hover:text-teal-700">
                  <i class="fas fa-globe mr-2"></i>
                  <span>Website Sekolah</span>
                </a>
              </li>
          </ul>
        </div>
      </div>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'Sidebar',
  };
  </script>
  
  <style scoped>
  /* Optional: Add specific styles for sidebar items */
  </style>
  