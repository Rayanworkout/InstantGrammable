<script setup lang="ts">
import HeroSection from './components/HeroSection.component.vue'
import About from './components/About.component.vue'
import Promotion from './components/Promotion.component.vue'
import Services from './components/Services.component.vue'
import Portfolio from './components/Portfolio.component.vue'

</script>

<template>
    <HeroSection />
    <About />
    <Promotion />
    <Services />
    <Portfolio />
</template>



<style>
.success-message {
    color: #28a745;
}
.error-message {
    color: #dc3545;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.pink-icon {
    color: var(--primary);
}
</style>


