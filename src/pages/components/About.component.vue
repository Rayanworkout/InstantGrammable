
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
                    <h4 class="font-weight-bold mb-3 text-center">Qui Sommes-nous ?</h4>
                    <h5 class="text-muted mb-3">L'instant Grammable est un café / restaurant situé à Manosque.</h5>
                    <p>Nous sommes une équipe dynamique de cinq amies passionnées par la cuisine et la création
                        d'expériences uniques.</p>
                    <p>
                        Notre vision est de transformer le traditionnel brunch en une expérience
                        immersive, où
                        chaque plat raconte une histoire et chaque coin du restaurant est une invitation à capturer et
                        partager des moments précieux.
                    </p>
                    <p>
                        Chez <i>L'Instant - Grammable</i>, nous vous invitons à savourer des
                        créations culinaires inspirées et à vivre des instants de pure joie, dans un lieu où la beauté des
                        mets se conjugue avec l'art de la convivialité.
                    </p>
                    <div class="text-center">
                        <router-link :to="{ name: 'Home', hash: '#services-section' }" class="btn btn-primary mt-2">En
                            Savoir Plus</router-link>
                    </div>

                </div>
                <div class="col-lg-4" style="min-height: 400px;">
                    <div class="position-relative h-100 rounded overflow-hidden">
                        <img class="position-absolute w-100 h-100" src="../../static/img/about.jpg"
                            style="object-fit: cover;">
                    </div>
                </div>
                <div class="col-lg-4 py-5">
                    <h4 class="font-weight-bold mb-3 text-center">Nos Recettes</h4>
                    <p>Notre équipe de cuisiniers vous propose chaque jour des recettes savoureuses et magnifiquement
                        présentées.</p>
                    <h5 class="text-muted mb-3"><i class="fa fa-check text-secondary mr-3"></i>Des aliments frais</h5>
                    <h5 class="text-muted mb-3"><i class="fa fa-check text-secondary mr-3"></i>Un thème rose et girly</h5>
                    <h5 class="text-muted mb-3"><i class="fa fa-check text-secondary mr-3"></i>Des recettes originales</h5>
                    <div class="text-center"> <router-link :to="{ name: 'Home', hash: '#services-section' }"
                            class="btn btn-primary mt-2">Nos
                            Services</router-link></div>

                </div>
            </div>
        </div>
    </div>
</template>
