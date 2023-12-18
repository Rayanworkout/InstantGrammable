
<template>
  <div class="container-fluid bg-primary py-3 d-none d-md-block">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
          <div class="d-inline-flex align-items-center">
            <span class="text-white"></span>
            <a class="text-white px-3"></a>
            <span class="text-white"></span>
            <a class="text-white pl-3"></a>
          </div>
        </div>
        <div class="col-md-6 text-center text-lg-right">
          <div class="d-inline-flex align-items-center">
            <a class="text-white px-3">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="text-white px-3">
              <i class="fab fa-twitter"></i>
            </a>
            <a class="text-white px-3">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a class="text-white px-3">
              <i class="fab fa-instagram"></i>
            </a>
            <a class="text-white pl-3">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div id="home" class="container-fluid position-relative nav-bar p-0">
    <div class="container-lg position-relative p-0 px-lg-3" style="z-index: 9;">
        <nav class="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0 gradient-border">
          <router-link :to="{ name: 'Home' }" class="navbar-brand d-block d-lg-none">
            <h1 class="m-0 display-5 text-primary"><span class="text-secondary">L'instant</span>Grammable</h1>
          </router-link>
          <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div class="navbar-nav ml-auto py-0">
              <router-link v-if="$route.path !== '/reservation'" :to="{ name: 'Reservation' }" class="nav-item nav-link">Réserver</router-link>
              <router-link :to="{ name: 'Home', hash: '#about-section' }" class="nav-item nav-link">Notre
                Vision</router-link>

            </div>
            <router-link :to="{ name: 'Home' }" class="navbar-brand mx-5 d-none d-lg-block">
              <h1 class="m-0 display-5 text-primary"><span class="text-secondary">L'instant</span>Grammable</h1>
            </router-link>
            <div class="navbar-nav mr-auto py-0">
              <router-link :to="{ name: 'Home', hash: '#portfolio-section' }" class="nav-item nav-link">La
                Carte</router-link>
              <router-link v-if="$route.path !== '/contact'" :to="{ name: 'Contact' }" class="nav-item nav-link">Contact</router-link>
            </div>
          </div>
        </nav>
    </div>
  </div>
</template>

<style>
.gradient-border {
  border-radius: 60px;
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(to right, #f9ce34, #ee2a7b, #6228d7) 1;
  border-radius: 0;
}

@media (max-width: 780px) {
  .gradient-border {
    border-width: 0px;
  }
}

.nav-link {
  white-space: nowrap;
}
</style>