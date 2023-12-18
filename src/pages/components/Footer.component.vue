

<template>
    <div class="container-fluid footer bg-light py-5" style="margin-top: 90px;">
        <div class="container text-center py-5">
            <div class="row">
                <div class="col-12 mb-4">
                    <a class="navbar-brand m-0">
                        <h1 class="m-0 mt-n2 display-4 text-primary"><span class="text-secondary">my</span>BRUNCH</h1>
                    </a>
                </div>
                <div class="col-12 mb-4">
                    <a class="btn btn-outline-secondary btn-social mr-2"><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-outline-secondary btn-social mr-2"><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-outline-secondary btn-social mr-2"><i class="fab fa-linkedin-in"></i></a>
                    <a class="btn btn-outline-secondary btn-social"><i class="fab fa-instagram"></i></a>
                </div>
                <div class="col-12 mt-2 mb-4">
                    <div class="row">
                        <div class="col-sm-6 text-center text-sm-right border-right mb-3 mb-sm-0">
                            <h5 class="font-weight-bold mb-2">Bienvenue !</h5>
                            <p class="mb-2">12 Avenue de Colbert</p>
                            <p class="mb-0">+012 345 67890</p>
                        </div>
                        <div class="col-sm-6 text-center text-sm-left">
                            <h5 class="font-weight-bold mb-2">Horaires d'ouverture</h5>
                            <p class="mb-2">Lundi – Samedi, 8h – 17h</p>
                            <p class="mb-0">Dimanche: Fermé</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Back to Top -->
    <router-link :to="{ name: 'Home', hash: '#home' }" class="btn btn-secondary px-2 back-to-top"><i class="fa fa-angle-double-up"></i></router-link>

</template>