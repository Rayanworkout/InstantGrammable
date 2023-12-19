
<script setup lang="ts">

import { ref } from 'vue';
import brunchTableImg from '../../static/img/brunch-table-compressed.jpg';

interface CarouselItem {
    image: string;
    title: string;
    subtitle: string;
}

// Using ref so Vue can track the value and render the component when it changes
let activeIndex = ref(0);

const carouselItems: CarouselItem[] = [
    {
        title: "Le plus doux des Brunchs",
        image: brunchTableImg,
        subtitle: "Accordez-vous un moment de détente et de gourmandise",
    },
    {
        title: "Un instant de douceur",
        image: brunchTableImg,
        subtitle: "Venez découvrir nos pâtisseries et nos chocolats",
    }
];

const previousSlide = () => {
    activeIndex.value = (activeIndex.value - 1 + carouselItems.length) % carouselItems.length;
}

const nextSlide = () => {
    activeIndex.value = (activeIndex.value + 1) % carouselItems.length;
}

</script>

<template>
    <div class="container-fluid p-0 mb-3 pb-3">
        <div id="header-carousel" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="overlay"></div>
                <div v-for="(item, index) in carouselItems" :key="index"
                    :class="['carousel-item', { active: index === activeIndex }]">
                    <img class="w-100" :src="item.image" :alt="'Image ' + index">
                    <div class="carousel-caption d-flex flex-column align-items-center">
                        <div class="p-3" style="max-width: 900px;">
                            <h2 class="text-white text-uppercase mb-md-3">{{ item.title }}</h2>
                            <h3 class="text-white">{{ item.subtitle }}</h3>
                            <router-link :to="{ name: 'Reservation' }" class="btn btn-primary py-md-3 px-md-5 mt-2">Réserver
                                une Table</router-link>
                        </div>
                    </div>
                </div>

            </div>
            <!-- Controls -->
            <a class="carousel-control-prev" @click="previousSlide">
                <div class="btn btn-secondary px-0" style="width: 45px; height: 45px;">
                    <span class="carousel-control-prev-icon mb-n1"></span>
                </div>
            </a>
            <a class="carousel-control-next" @click="nextSlide">
                <div class="btn btn-secondary px-0" style="width: 45px; height: 45px;">
                    <span class="carousel-control-next-icon mb-n1"></span>
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped>
h2 {
    margin-top: 200px;
    font-size: 50px;
}

.overlay {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
}

@media (max-width: 1000px) {
    h2 {
        margin-top: 10px;
    }

    h2,
    h3 {
        font-size: 1.5rem;
    }

    .btn {
        font-size: 80%;
    }
}
</style>