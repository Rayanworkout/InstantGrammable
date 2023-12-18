

<template>
    <div class="container-fluid my-3 py-3 px-0">
        <div class="row bg-primary m-0">
            <div class="col-md-6 px-0" style="min-height: 500px;">
                <div class="position-relative h-100">
                    <img class="position-absolute w-100 h-100" src="../../static/img/promotion.jpg"
                        style="object-fit: cover;">
                </div>
            </div>
            <div class="col-md-6 py-5 py-md-0 px-0">
                <div class="h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                    <div class="d-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                        style="width: 100px; height: 100px;">
                        <h3 class="font-weight-bold text-secondary mb-0">MIAM</h3>
                    </div>
                    <h3 class="font-weight-bold text-white mt-3 mb-4">Notre vedette</h3>
                    <p class="text-white mb-4">Venez goûter le <span class="fluffy">Fluffy Pancake</span> notre produit phare au succès fulgurant !
                    </p>
                    <router-link :to="{ name: 'Reservation' }" class="btn btn-secondary py-3 px-5 mt-2">
                        Je Réserve</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.fluffy {
    font-family: 'Oleo Script', sans-serif;
    font-size: 1.5em;
}

</style>