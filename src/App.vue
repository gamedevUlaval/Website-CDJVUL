<template>
  <div id="app" class="container-custom">
    <Navigation />
    <router-view class="container-custom" />
  </div>
</template>

<script>
import Navigation from "@/components/navigation/Navigation.vue";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap 5 CSS
import { createPopper } from '@popperjs/core'; // Import @popperjs/core for Popper functionality

export default {
  name: "App",
  components: {
    Navigation
  }
};
</script>

<style scoped>
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
