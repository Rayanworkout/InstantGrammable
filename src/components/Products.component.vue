<template>
    <div id="products-section" class="container-fluid py-3">
        <div class="container py-3">
            <div class="row">
                <div class="col-lg-6">
                    <h1 class="section-title position-relative mb-5">Best Prices We Offer For Ice Cream Lovers</h1>
                </div>
                <div class="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0"></div>
            </div>
            <div class="row">
                <div class="col-md-6 col-lg-3 mb-4">
                    <div class="product-item d-flex flex-column align-items-center text-center bg-light rounded py-5 px-3">
                        <div class="bg-primary mt-n5 py-3" style="width: 80px;">
                            <h4 class="font-weight-bold text-white mb-0">$99</h4>
                        </div>
                        <div class="position-relative bg-primary rounded-circle mt-n3 mb-4 p-3"
                            style="width: 150px; height: 150px;">
                            <img class="rounded-circle w-100 h-100" src="../static/img/product-1.jpg"
                                style="object-fit: cover;">
                        </div>
                        <h5 class="font-weight-bold mb-4">Vanilla Ice Cream</h5>
                        <router-link :to="{ name: 'Contact', hash: '#contact-section' }"
                            class="btn btn-sm btn-secondary">Réserver une Table</router-link>
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
                        <router-link :to="{ name: 'Contact', hash: '#contact-section' }"
                            class="btn btn-sm btn-secondary">Réserver une Table</router-link>
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
                        <router-link :to="{ name: 'Contact', hash: '#contact-section' }"
                            class="btn btn-sm btn-secondary">Réserver une Table</router-link>
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
                        <router-link :to="{ name: 'Contact', hash: '#contact-section' }"
                            class="btn btn-sm btn-secondary">Réserver une Table</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
