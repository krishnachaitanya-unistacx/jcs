<template>
  <div>
    <div class="top w-100" style="background-color: rgb(0, 0, 61); ">
      <!-- <button class="btn btn-success ms-3 btn-sm">call now</button>  -->

      <div class="ticker-container d-flex align-items-cente">
        <!-- <div class="d-flex text-white py-2 justify-content-between w-100 px-m-4 px-lg-5 px-2"> -->
        <div class=" news-ticker d-flex align-items-center py-1 px-2">

          <div class="news-ticker-content w-100 m-0 p-0" style="height: auto;">
            <ul class="fs-6 d-flex align-items-center m-0 p-0">
              <li><a class="#" href="#">Value Added Tax (VAT) Consultancy</a></li>
              <li><a href="#"> GST Consultancy</a></li>
              <li><a href="#"> Income Tax Consultancy</a></li>
              <li><a href="#">Professional Tax Consultancy</a></li>
              <li><a href="#">Tax Consultancy Services</a></li>
            </ul>
          </div>
        </div>
        <div class="right d-flex p-1 align-items-center justify-content-around">
          <a class="btn  btn-sm btn-success" href="tel:+918374318214">call now</a>
          <div class="news-ticker-header decoration-none d-flex gap-3 flex-inline social-icons">
            <a href="#"><i class="bi bi-facebook fs-5"></i></a>
            <a href="#"><i class="bi bi-instagram fs-5"></i></a>
            <a href="#"><i class="bi bi-twitter fs-5"></i></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow p-3 py-4 " style="position:sticky; top:50px;">
      <div class="container-fluid nav-c relative d-flex align-items-center gap-5">
        <img class="navbar-brand" src="../../assets/images/black-logo.svg" alt="" style="height: 42px" />
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar" >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-2">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link" aria-current="page">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/about">About</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/service">Service</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <RouterLink class="nav-link dropdown-toggle" role="button" to="/sub" data-bs-toggle="dropdown"
                aria-expanded="false">Tax information
              </RouterLink>
              <ul class="dropdown-menu">
                <li>
                  <RouterLink class="dropdown-item" to="/Sub">Subservice</RouterLink>
                </li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

</template>

<script>
import { RouterLink } from "vue-router";
export default {
  data() {
    return {
      name: "AppHeader",
    };
  },
};
</script>


<style scoped>
.ticker-container {
  font-family: 'Poppins', sans-serif;
}

.news-ticker {
  width: 85%;

}
.right{
  width: 15%;
}
.news-ticker-header {
  color: rgb(73, 202, 71);
  
  display: flex;
}

.routlink,
.bi {
  color: white;
  text-decoration: none !important;

}

.news-ticker-content {
  overflow: hidden;
  /* white-space: nowrap; */
 
}

.news-ticker-content ul {
  /* display: flex; */
  white-space: nowrap;
  list-style: none;
  animation: ticker 10s linear infinite;
}



.news-ticker-content ul li ::after {
  content: "|";
  margin: 0 10px;

}

.news-ticker-content ul li:last-child ::after {
  content: "";
}

.news-ticker-content ul li a {
  text-decoration: none;
  color: white;
}

/*** Ticker Animation***/
@keyframes ticker {
  
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }

}

@media (max-width: 700px) {
  .no-mobile {
    display: none;
  }
  .social-icons{
    display: none !important;
  }

}

.closeMenuBtn {
  display: none !important;
}
@media (max-width:1130px) {
  .news-ticker{
    width: 75%;
  }
  .right{
    width: 25%;
  }
}

/*****Call back function image */
@media (max-width: 992px) {
  .nav-list {
    display: block !important;
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    /*left: -100% !important;*/
    /*transform: translateX(50%) !important;*/
    background-color: white;
    padding: 20px;
    height: 100vh;
    width: 90vw;
  }

  .nav-c {
    justify-content: space-between !important;
  }

  .menu-btn {
    display: block !important;
  }

  .closeMenuBtn {
    display: block !important;
  }

  .home-sec4 {
    background-position: bottom;
  }
}
</style>