

<template>
    <div id="products-section" class="container-fluid py-3">
        <div class="container py-3">
            <h1 class="section-title mb-5 text-center py-3 pink-icon">Notre Carte</h1>
            <div class="row">
                <div class="col-md-6 col-lg-3 mb-4">
                    <div class="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                        <div class="bg-primary mt-n5 py-3" style="width: 80px;">
                            <h4 class="font-weight-bold text-white mb-0">15€</h4>
                        </div>
                        <div class="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3"
                            style="width: 150px; height: 150px;">
                            <img class="rounded-circle w-100 h-100" src="../static/img/product-1.jpg"
                                style="object-fit: cover;">
                        </div>
                        <h5 class="font-weight-bold mb-4">Assiette 1</h5>
                        <p>Déscription de la formule</p>
                        <router-link :to="{ name: 'Reservation' }" class="btn btn-sm btn-secondary">Réserver une
                            Table</router-link>
                    </div>
                </div>
                <div class="col-md-6 col-lg-3 mb-4">
                    <div class="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                        <div class="bg-primary mt-n5 py-3" style="width: 80px;">
                            <h4 class="font-weight-bold text-white mb-0">$99</h4>
                        </div>
                        <div class="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3"
                            style="width: 150px; height: 150px;">
                            <img class="rounded-circle w-100 h-100" src="../static/img/product-2.jpg"
                                style="object-fit: cover;">
                        </div>
                        <h5 class="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                        <router-link :to="{ name: 'Reservation' }" class="btn btn-sm btn-secondary">Réserver une
                            Table</router-link>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3 mb-4">
                    <div class="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                        <div class="bg-primary mt-n5 py-3" style="width: 80px;">
                            <h4 class="font-weight-bold text-white mb-0">$99</h4>
                        </div>
                        <div class="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3"
                            style="width: 150px; height: 150px;">
                            <img class="rounded-circle w-100 h-100" src="../static/img/product-3.jpg"
                                style="object-fit: cover;">
                        </div>
                        <h5 class="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                        <router-link :to="{ name: 'Reservation' }" class="btn btn-sm btn-secondary">Réserver une
                            Table</router-link>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3 mb-4">
                    <div class="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                        <div class="bg-primary mt-n5 py-3" style="width: 80px;">
                            <h4 class="font-weight-bold text-white mb-0">$99</h4>
                        </div>
                        <div class="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3"
                            style="width: 150px; height: 150px;">
                            <img class="rounded-circle w-100 h-100" src="../static/img/product-4.jpg"
                                style="object-fit: cover;">
                        </div>
                        <h5 class="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                        <router-link :to="{ name: 'Reservation' }" class="btn btn-sm btn-secondary">Réserver une
                            Table</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
