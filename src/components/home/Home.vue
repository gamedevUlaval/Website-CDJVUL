<template>
  <div>
    <br />
    <h1>Bienvenue au club de développement de jeux vidéo de l'Université Laval</h1>
    <br />
    <h4 style="text-align:justify;margin-right: 30px;margin-left:30px;">
      Le club de développement de jeux vidéo de l'Université Laval a pour objectif d'enrichir les connaissances en création de jeux vidéo
      des étudiants de la faculté des sciences et génie. Pour ce faire, le club propose des formations,
      des séances de travail et des conférences avec des professionnels de l'industrie. Ses membres sont encouragés à participer à des concours dans le but de réaliser des projets vidéoludiques.
    </h4>
    <br />

    <!--Carousel Wrapper-->
    <div id="carousel-project-images" class="carousel slide carousel-fade" data-ride="carousel" data-interval="5000">

      <!--Indicators-->
      <ol class="carousel-indicators">
        <li data-target="#carousel-project-images" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-project-images" v-for="(project,index) in projects" v-bind:key="index" :data-slide-to="index+1"></li>
      </ol>
      <!--/.Indicators-->

      <!--Slides-->
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="view">
            <img src="home/logo_cdjvul.png" alt="Image introuvable" />
          </div>
          <div class="carousel-caption"></div>
        </div>
        <div class="carousel-item" v-for="(project,index) in projects" v-bind:key="index">
          <div class="view">            
            <img v-bind:src="require(`@/assets/projects/${project.mainImagePath}`)" alt="Image introuvable" />
          </div>
          <div class="carousel-caption"></div>
        </div>
      </div>
      <!--/.Slides-->

      <!--Controls-->
      <a class="carousel-control-prev" href="#carousel-project-images" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carousel-project-images" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
      <!--/.Controls-->

    </div>
    <!--/.Carousel Wrapper-->

    <br />
    <br />

    <div class="card-deck">
      <div class="card bg-dark">
        <div class="card-body text-center">
          <h3 class="card-text">Restez à jour sur les événements</h3>
          <div>
            <a href="https://www.facebook.com/gamedevUlaval/" target="_blank">
              <div>
                <img src="home/Facebook.svg.png" class="icons-link" />
                <a href="https://www.facebook.com/gamedevUlaval/" target="_blank" class="icon-box">Facebook</a>
              </div>
            </a>
            <br />
            <a href="https://cfi-ul.slack.com/" target="_blank">
              <div>
                <img src="home/slack.png" class="icons-link" />
                <a href="https://cfi-ul.slack.com/" target="_blank" class="icon-box">Slack</a>
              </div>
            </a>
            <br />
            <a href="https://discord.gg/3WgpkMY" target="_blank">
              <div>
                <img src="home/discord.jpg" class="icons-link" />
                <a href="https://discord.gg/3WgpkMY" target="_blank" class="icon-box">Discord</a>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="card bg-dark">
        <div class="card-body text-center">
          <h3 class="card-text">Responsable du club</h3>
          <br />
          <img class="spotlight" alt="Image introuvable" src="home/ariel_carignan.jpg" />
          <br />
          <br />
          <p>Ariel Carigan</p>
          <p>Étudiant au BAC en Génie Logiciel</p>
        </div>
      </div>
      <div class="card bg-dark">
        <div class="card-body text-center">
          <h3 class="card-text">Où nous trouver?</h3>
          <p>1065 avenue de la Médecine, Québec, Canada</p>
          <p>Pavillon Adrien-Pouliot</p>
          <p>Local PLT-3778</p>
          <br />
          <br />
          <h3>Heures d'ouverture du local</h3>
          <p>Non disponible pour le moment étant donné</p>
          <p>que la plupart des cours sont à distance</p>
          <br />
          <br />
          <h3>Pour nous contacter</h3>
          <p>gamedev.admin@ift.ulaval.ca</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as projectsDataFile from "../projects/Projects.js";

export default {
  name: "Home",
  data: () => ({
    projects: [],
  }),

  async created() {
    this.projects = projectsDataFile.projects;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-deck {
    padding: 2rem;
}

.spotlight {
  border-radius: 50%;
  width: 100%;
  max-width: 250px;
  object-fit: contain;
}
.icons-link {
  width: 100%;
  max-width: 100px;
  object-fit: contain;
  display: inline-block;
}

.icon-box {
  width: 50%;
  display: inline-block;
  color: white;
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
