<script setup lang="ts">
import MyHeader from './pages/components/Header.component.vue'
import MyFooter from './pages/components/Footer.component.vue'

</script>

<template>

  <div>
    <MyHeader />
    <router-view></router-view>
    <MyFooter />
  </div>
</template>


