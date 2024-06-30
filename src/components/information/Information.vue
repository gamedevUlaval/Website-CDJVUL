<template>
  <div>
    <h1>Cette section du site web est en construction! N'hésitez pas à rejoindre le discord et suivre notre page facebook pour les activités à venir!</h1>
  </div>
</template>

<script>
export default {
  name: "InformationPage",
  props: {
    msg: {
      type: String,
      default: ""
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  position: relative;
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  width: 100%;
}

.spotlight {
  border-radius: 50%;
  width: 100%;
  max-width: 250px;
  object-fit: contain;
}

p {
  margin: 0;
}

.carousel {
  padding-bottom: 15px;
}

.carousel .carousel-item img {
  min-height: 500px;
  max-height: 500px;
  min-width: auto;
}
</style>
