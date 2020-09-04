<template>
  <div>
    <h1>Projets du club</h1>
    <div v-for="(project,index) in projects" v-bind:key="index" class="row border-bottom border-top">
      <br/>
      <div class="col-md-3"><img class="img-fluid" v-bind:src="require(`@/assets/projects/${project.mainImagePath}`)" v-on:click="goToProject(index)" alt="Image introuvable"></div>
      <div class="project-description col-md-9">
        <h2> <a href="javascript:;" class="project-title" v-on:click="goToProject(index)">{{project.title}}</a></h2>
        <h5>{{project.description}}</h5>
        <div v-if="project.participants" class="project-participants">
          <span class="project-bold-text">Participants: </span>
          <span>{{project.participants.join(", ")}}</span>
        </div>
        <br>
        <div v-if="project.event" class="project-event">
          <span class="project-bold-text">Événement:</span>
          {{project.event}}
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
    projects: []
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
      this.projects = projectInformation.projets;
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
