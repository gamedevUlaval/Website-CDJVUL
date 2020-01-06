<template>
  <div>
    <h1>Projets du club</h1>
    <div v-for="(projet,index) in projets" v-bind:key="index" class="project-box">
      <hr>
      <img class="project-image" v-bind:src="projet.imagePath" alt="image could not be displayed">
      <span class="project-description">
        <h2>{{projet.title}}</h2>
        <h5>{{projet.description}}</h5>
        <div v-if="projet.participants" class="project-participants">
          <span class="project-bold-text">Participants: </span>
          <span v-for="participant in projet.participants" v-bind:key="participant">{{participant}}</span>
        </div>
        <div v-if="projet.event" class="project-event">
          <span class="project-bold-text">Event:</span>
          {{projet.event}}
        </div>
      </span>
    </div>
    <hr>
    <br>
  </div>
</template>

<script>
import * as projectInformation from "./Projet.js"
export default {
  name: "Projet",
  data: () => ({
    projets: []
  }),
  async created() {
      this.projets = projectInformation.projets;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project-image {
  height: 200px;
  width: 200px;
  float: left;
  margin-right: 20px;
  margin-left: 20px;
}

.project-description {
  float: left;
  text-align: justify;
  margin: 20px;
  margin-top: 0;
  width: calc(100% - 280px)
}

.project-box {
  height: 250px;
}
.project-participants {
  float: left;
  text-align: left;
  width: 75%;
}
.project-event {
  float: left;
  width: 25%;
  text-align: right;
}
.project-bold-text {
  font-weight:bold;
}
hr {
  color: white;
  background-color: white;
  border-color: white;
  margin-bottom: 10px;
}
</style>
