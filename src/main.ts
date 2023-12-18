import { createApp } from 'vue';
import { Router, createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

// Import the pages
import Home from './pages/Home.page.vue';
import Reservation from './pages/Reservation.page.vue';
import Contact from './pages/Contact.page.vue';
import Menu from './pages/Menu.page.vue';

// Create a custom type for the $router property
// So it can be used in any component without errors
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $router: Router;
    }
  }

  // I create a router to manage my pages
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // On sections within the same page, I use smooth scrollBehavior
    { path: '/', component: Home, name: 'Home' },
    { path: '/reservation', component: Reservation, name: 'Reservation' },
    { path: '/contact', component: Contact, name: 'Contact' },
    { path: '/carte', component: Menu, name: 'Menu' },
  ],

  scrollBehavior(to, _, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  }
});

createApp(App).use(router).mount('#app');
