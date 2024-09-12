import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import DataIndukSiswa from '../views/DataIndukSiswa.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/data-induk-siswa', component: DataIndukSiswa }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
