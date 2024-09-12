<template>
  <nav class="bg-gray-800 text-white flex items-center p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
    <!-- Logo dan Hamburger Menu -->
    <div class="flex items-center space-x-4">
      <!-- Logo -->
      <img src="../assets/img/logo.png" alt="SMK Demo" class="w-10 h-10 rounded-full object-cover">
      <div class="text-lg font-semibold">SMK Demo</div>
      <button class="text-lg">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <div class="flex-grow"></div>

    <!-- Tombol Mode Gelap/Terang -->
    <button @click="toggleDarkMode" class="mr-4">
      <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'" class="text-xl"></i>
    </button>

    <!-- User Profile dan Dropdown -->
    <div class="relative group hover:text-teal-600">
      <button class="flex items-center space-x-2">
        <i class="fas fa-user-circle text-2xl"></i>
        <span class="font-medium text-sm">Abidzar Dzakwan | Admin</span>
        <!-- Dropdown Icon -->
        <i class="fas fa-chevron-down ml-2 transition-transform duration-300" :class="{ 'rotate-180': isDropdownOpen }" @click="toggleDropdown"></i>
      </button>

      <div class="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
        <ul class="py-2">
          <li>
            <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <i class="fas fa-user-circle mr-2"></i><span>Profile</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <i class="fas fa-cogs mr-2"></i><span>Settings</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-200">
              <i class="fas fa-sign-out-alt mr-2"></i><span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isDropdownOpen: false,
      isDarkMode: false
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }
};
</script>

