<template>
  <div>
    <h1 class="project-title">{{this.projectInfo.title}}</h1>
    <h3>{{this.projectInfo.event}}</h3>
    <h4 class="project-description">{{this.projectInfo.description}}</h4>

    <div class="preview-wrapper">
      <div class="embed-responsive embed-responsive-16by9">
        <img 
          v-if="this.projectInfo.gameplayTrailer == undefined" 
          class="embed-responsive-item" 
          v-bind:src="require(`@/assets/projects/${this.projectInfo.mainImagePath}`)" 
          alt="Image introuvable">       
        <iframe
          v-else        
          class="embed-responsive-item"
          v-bind:src="this.projectInfo.gameplayTrailer"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <h3 class="project-title">Images et art conceptuel</h3>
    <div class="container">
      <div class="card-columns">
        <div class="card" v-for="(image,index) in projectImagesPaths" v-bind:key="index">
          <img
            class="card-img img-fluid"
            v-bind:src="image"
            alt="Image introuvable"
            @click="showImageModal(image)"
          />
        </div>
      </div>
    </div>

    <h3>Participants</h3>
    <div class="container">
      <div class="list-group d-flex flex-row flex-wrap">
        <div class="w-50" v-for="participant in projectInfo.participants" v-bind:key="participant">
          {{participant}}
        </div>
      </div>
    </div>

    <!-- Image Modal -->
    <div v-if="showModal">
      <div class="modal">
        <span class="close" v-on:click="hideImageModal()">&times;</span>
        <img class="modal-content img-fluid" v-bind:src="currentImage" alt="Zoomed image" />
      </div>
    </div>
  </div>
</template>

<script>
import * as projectsInformation from "./Projet.js";

export default {
  name: "ProjectOverview",
  props: ["projectIndex"],
  data: () => ({
    projectInfo: undefined,
    showModal: false,
    currentImage: undefined,
    projectImagesPaths: []
  }),

  methods: {
    showImageModal: function(selectedImage) {
      this.currentImage = selectedImage;
      this.showModal = true;
    },

    hideImageModal: function() {
      this.showModal = false;
      this.currentImage = undefined;
    }
  },  

  async created() {
    this.projectInfo = projectsInformation.projets[this.projectIndex];    

    const files = require.context(`@/assets/projects`, true, /\.(png|jpg)$/);
    files.keys().forEach(key => {
      if (key.startsWith(`./${this.projectInfo.imagesFolder}`)) {
        this.projectImagesPaths.push(files(key));
      }      
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.project-title {
  padding-top: 2rem;
}
.project-description {
  display: inline-block;
  max-width: 1200px;
  text-align: justify;
  padding: 2rem;
}
.preview-wrapper {
  display: inline-block;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  max-height: 400px;
}
.container {
  padding: 1rem;
}
.card-img {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}
.card-img:hover {
  opacity: 0.7;
}
.modal {
  display: block;
  position: fixed;
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9); /* Black w/ opacity */
}
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  animation-name: zoom;
  animation-duration: 0.6s;
}
@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}
.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}
</style>