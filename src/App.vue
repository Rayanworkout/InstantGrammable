<script setup lang="ts">
import MyHeader from './pages/components/Header.component.vue'
import MyFooter from './pages/components/Footer.component.vue'

</script>

<template>

  <!-- Using Header and Footer on all pages, and then a router view to display the content of each page. -->
  <div>
    <MyHeader />
    <router-view></router-view>
    <MyFooter />
  </div>
</template>


