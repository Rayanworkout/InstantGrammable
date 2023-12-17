import { createApp } from 'vue';
import { Router, createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import About from './components/About.component.vue';
import Contact from './components/Contact.component.vue';
import Portfolio from './components/Portfolio.component.vue';
import Products from './components/Products.component.vue';
import Services from './components/Services.component.vue';
import Reservation from './components/Reservation.component.vue';

// Create a custom type for the $router property
// So it can be used in any component without errors
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $router: Router;
    }
  }

  // I create a router with empty routes to use the smooth scrollBehavior
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // Defining all my routes within the single page so I
    // can easily access them with the smooth scrollBehavior
    { path: '/reservation', component: Reservation, name: 'Reservation' },
    { path: '/', component: App, name: 'Home' },
    { path: '/', component: About, name: 'About' },
    { path: '/', component: Products, name: 'Products' },
    { path: '/', component: Services, name: 'Services' },
    { path: '/', component: Portfolio, name: 'Portfolio' },
    { path: '/', component: Contact, name: 'Contact' },
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
