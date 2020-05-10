<template>
  <div>
    <h1>Projets du club</h1>
    <div v-for="(projet,index) in projets" v-bind:key="index" class="row border-bottom border-top">
      <br/>
      <div class="col-md-3"><img class="img-fluid" v-bind:src="projet.imagePath" v-on:click="goToProject(index)" alt="image could not be displayed"></div>
      <div class="project-description col-md-9">
        <h2> <a href="#" class="project-title" v-on:click="goToProject(index)">{{projet.title}}</a></h2>
        <h5>{{projet.description}}</h5>
        <div v-if="projet.participants" class="project-participants">
          <span class="project-bold-text">Participants: </span>
          <span v-for="participant in projet.participants" v-bind:key="participant">{{participant}}</span>
        </div>
        <br>
        <div v-if="projet.event" class="project-event">
          <span class="project-bold-text">Événement:</span>
          {{projet.event}}
        </div>
        <br/>
      </div>
    </div>
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

  methods: {
    goToProject: function(index) {
      this.$router.push({
        name: "ProjectOverview",
        params: { 
          projectIndex: index     
        }
      });
    }
  },

  async created() {
      this.projets = projectInformation.projets;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img:hover {
    cursor: pointer;
}
.project-title{
  color:white;
}
.project-description {
  text-align: justify;
  padding-right: 45px;
  width:100%;
}
.project-participants {
  text-align: left;
}
.project-event {
  text-align: left;
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
.row{
  width:100%;
  margin: 0;
  padding-left:15px;
}
</style>
