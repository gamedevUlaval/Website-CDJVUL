<template>
  <div>
    <h1>Projets du club</h1>

    <div
      v-for="(project, index) in projects"
      :key="index"
      class="project-container"
    >
      <hr>
      <div class="row">     
        <div class="col-12 col-lg-4 col-xl-3 p-2">
          <div class="w-100 h-100 d-flex justify-content-center align-items-center">
            <div class="embed-responsive embed-responsive-16by9">
              <img
                class="embed-responsive-item"
                :src="getImagePath(project.mainImagePath)"
                alt="Image introuvable"
                @click="goToProject(index)"
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-8 col-xl-9 p-2">
          <h2 class="project-title text-center text-lg-left">
            <a
              href="javascript:;"
              class="project-title-link"
              @click="goToProject(index)"
            >{{ project.title }}</a>
          </h2>
          <h5 class="project-description">
            {{ project.description }}
          </h5>
          <br>
          <div
            v-if="project.participants"
            class="project-participants"
          >
            <span class="project-bold-text">Participants: </span>
            <span>{{ project.participants.join(", ") }}</span>
          </div>
          <br>
          <div
            v-if="project.event"
            class="project-event"
          >
            <span class="project-bold-text">Événement:</span>
            {{ project.event }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as projectsDataFile from "./Projects.js"

export default {
  name: "ProjectsPage",
  data: () => ({
    projects: []
  }),

  async created() {
      this.projects = projectsDataFile.projects;
  },

  methods: {
    getImagePath(imageName) {
      return `/src/assets/projects/${imageName}`;
    },
    goToProject: function(index) {
      this.$router.push({
        name: "ProjectOverview",
        params: { 
          projectIndex: index     
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 1rem;
}
.project-container {
  padding-left: 2rem;
  padding-right: 2rem;
}
hr {
  color: white;
  background-color: white;
  border-color: white;
  margin-bottom: 10px;
}
img:hover {
    cursor: pointer;
}
.project-title{
  margin-bottom: 1rem;
}
.project-title-link{  
  color:white;
}
.project-description {
  text-align: left;
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
</style>
