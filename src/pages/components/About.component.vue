
<template>
    <div id="about-section" class="container-fluid">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7 text-center">
                    <img src="../../static/img/logo.png" alt="company logo" width="250px">
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 py-5">
                    <h4 class="font-weight-bold mb-3">Qui Sommes-nous ?</h4>
                    <h5 class="text-muted mb-3">L'instant Grammable est un café / restaurant situé à Manosque.</h5>
                    <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam
                        lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit
                        ut. Labor diam sed ipsum et eirmod</p>
                    <router-link :to="{ name: 'Home', hash: '#services-section' }" class="btn btn-primary mt-2">En
                        Savoir Plus</router-link>
                </div>
                <div class="col-lg-4" style="min-height: 400px;">
                    <div class="position-relative h-100 rounded overflow-hidden">
                        <img class="position-absolute w-100 h-100" src="../../static/img/about.jpg"
                            style="object-fit: cover;">
                    </div>
                </div>
                <div class="col-lg-4 py-5">
                    <h4 class="font-weight-bold mb-3">Nos Recettes</h4>
                    <p>Notre équipe de cuisiniers vous propose chaque jour des recettes savoureuses et magnifiquement
                        présentées.</p>
                    <h5 class="text-muted mb-3"><i class="fa fa-check text-secondary mr-3"></i>Des aliments frais</h5>
                    <h5 class="text-muted mb-3"><i class="fa fa-check text-secondary mr-3"></i>Un thème rose et girly</h5>
                    <h5 class="text-muted mb-3"><i class="fa fa-check text-secondary mr-3"></i>Des recettes originales</h5>
                    <router-link :to="{ name: 'Home', hash: '#services-section' }" class="btn btn-primary mt-2">Nos
                        Services</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

