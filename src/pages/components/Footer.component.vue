

<template>
    <div class="container-fluid footer bg-light py-5" style="margin-top: 90px;">
        <div class="container text-center">
            <div class="row">
                <div class="col-12 mb-4">
                    <a class="navbar-brand">
                        <h1 class="m-0 mt-n2 display-5 text-primary"><span class="text-secondary">L'instant</span>Grammable
                        </h1>
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
                            <p class="mb-2">Rue de la Reine Jeanne, 04100 Manosque</p>
                            <p class="mb-0">06.77.00.54.76</p>
                        </div>
                        <div class="col-sm-6 text-center text-sm-left">
                            <h5 class="font-weight-bold mb-2">Horaires d'ouverture</h5>
                            <p class="mb-2">Lundi: Fermé</p>
                            <p class="mb-2">Mardi à Jeudi, 10h – 15h & 18h - 21h30</p>
                            <p class="mb-2">Vendredi & Samedi, 10h – 15h & 18h - 23h</p>
                            <p class="mb-0">Dimanche, 10h - 15h</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Back to Top -->
    <div v-if="$route.path === '/'">
        <router-link :to="{ name: 'Home', hash: '#home' }" class="btn btn-secondary px-2 back-to-top"><i
                class="fa fa-angle-double-up"></i></router-link>

    </div>
</template>