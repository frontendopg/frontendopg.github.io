import { createRouter, createWebHistory } from 'vue-router';

// Import your components for the routes
import App from './App.vue';
import PopUp from '@/components/PopUp.vue';

const routes = [
  {
    path: '/',
    component: App,
  },
  {
    path: '/popup',
    component: PopUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;