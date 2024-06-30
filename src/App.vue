<template>
  <div
    id="app"
    class="container-custom"
  >
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N"
      crossorigin="anonymous"
    >


    <Navigation />
    <router-view class="container-custom" />
  </div>
</template>

<script>
import Navigation from "@/components/navigation/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100%;
}
.container-custom {
  background-color: #282b2e;
  color: white;
}
html,
body {
  height: 100%;
  margin: 0;
}
</style>
