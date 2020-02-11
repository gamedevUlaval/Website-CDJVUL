<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark padding-left">

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <ul class="navbar-nav collapse navbar-collapse mr-auto mt-lg-0" id="navbarNavAltMarkup">
      <li><img src="logoUL.png" class="navbar-img"></li>
      <li>
        <router-link class="nav-link left-align" to="/">Club de Développement de Jeux Vidéo de l'UL</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link left-align" to="/">Accueil</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link left-align" to="/projets">Projets</router-link>
      </li>
      <!--<li class="nav-item">
        <router-link class="nav-link left-align" to="/information">Information</router-link>
      </li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navbar-img {
    width:100px;
    height: 40px;
  }
  .padding-left {
    padding: 0;
    padding-left: 10px;
  }
  .left-align {
    text-align: left;
  }
</style>
