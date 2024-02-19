// router.js
import { createRouter, createWebHistory } from 'vue-router';
import AboutSection from '@/views/AboutSection.vue';
import HomeSection from '@/views/HomeSection.vue';
import ProjectSection from '@/views/ProjectSection.vue';
import ContactSection from '@/views/ContactSection.vue';

const routes = [
  { path: '/', component: HomeSection },
  { path: '/about', component: AboutSection },
  { path: '/projects', component: ProjectSection },
  { path: '/contact', component: ContactSection },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;