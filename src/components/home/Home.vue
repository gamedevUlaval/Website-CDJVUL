<template>
  <div>
    <br>
    <h1>Bienvenue au club de développement de jeux vidéo de l'Université Laval</h1>
    <br>
    <h4 style="text-align: left;margin-right: 30px;margin-left: 30px;">
      Le club de développement de jeux vidéo de l'Université Laval a pour objectif d'enrichir les connaissances en création de jeux vidéo
      des étudiants de la faculté des sciences et génie. Pour ce faire, le club propose des formations,
      des séances de travail et des conférences avec des professionnels de l'industrie. Ses membres sont encouragés à participer à des concours dans le but de réaliser des projets vidéoludiques.
    </h4>
    <br>

    <!--Carousel Wrapper-->
    <div class="carousel-wrapper">
      <div
        id="carousel-project-images"
        class="carousel slide carousel-fade"
        data-ride="carousel"
        data-interval="5000"
      >
        <!--Indicators-->
        <ol class="carousel-indicators">
          <li
            data-target="#carousel-project-images"
            data-slide-to="0"
            class="active"
          />
          <li
            v-for="(project, index) in projects"
            :key="index"
            data-target="#carousel-project-images"
            :data-slide-to="index+1"
          />
        </ol>
        <!--/.Indicators-->

        <!--Slides-->
        <div
          class="carousel-inner"
          role="listbox"
        >
          <div class="carousel-item active">
            <div class="embed-responsive embed-responsive-16by9">
              <img
                class="embed-responsive-item"
                :src="logoPath"
                alt="Image introuvable"
              >
            </div>
            <div class="carousel-caption" />
          </div>
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="carousel-item"
          >
            <div class="embed-responsive embed-responsive-16by9">
              <img
                class="embed-responsive-item"
                :src="getImagePath(project.mainImagePath)"
                alt="Image introuvable"
              >
            </div>
            <div class="carousel-caption" />
          </div>
        </div>
        <!--/.Slides-->

        <!--Controls-->
        <a
          class="carousel-control-prev"
          href="#carousel-project-images"
          role="button"
          data-slide="prev"
        >
          <span
            class="carousel-control-prev-icon"
            aria-hidden="true"
          />
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carousel-project-images"
          role="button"
          data-slide="next"
        >
          <span
            class="carousel-control-next-icon"
            aria-hidden="true"
          />
          <span class="sr-only">Next</span>
        </a>
        <!--/.Controls-->
      </div>
    </div>
    <!--/.Carousel Wrapper-->

    <div class="card-deck">
      <div class="card bg-dark">
        <div class="card-body text-center">
          <h3 class="card-text">
            Restez à jour sur les événements
          </h3>
          <div>
            <br>
            <a
              href="https://www.facebook.com/gamedevUlaval/"
              target="_blank"
            >
              <div>
                <img
                  :src="facebookIcon"
                  class="icons-link rounded-lg"
                >
                <a
                  href="https://www.facebook.com/gamedevUlaval/"
                  target="_blank"
                  class="icon-box"
                >Facebook</a>
              </div>
            </a>
            <br>
            <a
              href="https://discord.gg/w5waVkPKTj"
              target="_blank"
            >
              <div>
                <img
                  :src="discordIcon"
                  class="icons-link rounded-lg"
                >
                <a
                  href="https://discord.gg/w5waVkPKTj"
                  target="_blank"
                  class="icon-box"
                >Discord</a>
              </div>
            </a>
            <br>
            <a
              style="font-size: 1.75rem"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfM7rsdwywJ00xK1Kmowq59YvUX-SsID-as5uY6ghEOJ0o-TA/viewform?usp=pp_url"
            >Inscrivez-vous officiellement au club ici!</a>
          </div>
        </div>
      </div>
      <div class="card bg-dark">
        <div class="card-body text-center">
          <h3 class="card-text">
            Responsable du club
          </h3>
          <br>
          <img
            class="spotlight"
            alt="Image introuvable"
            :src="presidentImage"
          >
          <br>
          <br>
          <p>Emmanuel Coutlée</p>
          <p>Étudiant à la maîtrise en Intelligence Artificielle</p>
        </div>
      </div>
      <div class="card bg-dark">
        <div class="card-body text-center">
          <h3 class="card-text">
            Où nous trouver?
          </h3>
          <p>1065 avenue de la Médecine, Québec, Canada</p>
          <p>Pavillon Adrien-Pouliot</p>
          <p>Local PLT-3778</p>
          <br>
          <br>
          <h3>Heures d'ouverture du local</h3>
          <p>À déterminer</p>
          <br>
          <br>
          <h3>Pour nous contacter</h3>
          <p>gamedev.admin@ift.ulaval.ca</p>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center">
    Siteweb version: {{ version }}
  </div>
</template>

<script>
import * as projectsDataFile from "../projects/Projects.js";

// Import images using ES module syntax
import logoPath from '@/assets/home/logo_cdjvul_1920x1080.png';
import facebookIcon from '@/assets/home/Facebook.svg.png';
import discordIcon from '@/assets/home/discord.jpg';
import presidentImage from '@/assets/home/emmanuel_coutlee.jpg';

export default {
  name: "HomePage",
  data() {
    return {
      projects: [],
      logoPath: logoPath,
      facebookIcon: facebookIcon,
      discordIcon: discordIcon,
      presidentImage: presidentImage,
      version: __APP_VERSION__
    };
  },

  async created() {
    this.projects = projectsDataFile.projects;
  },

  methods: {
    getImagePath(imageName) {
      return `/projects/${imageName}`;
    }
  }
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

.carousel-wrapper {
  display: flex;
  justify-content: center;
}

.carousel {
  padding-bottom: 15px;
  width: 60%;
}

/* On screens that are 992px or less, make image carousel take up 100% of screen width */
@media screen and (max-width: 992px) {
  .carousel {
    width: 95%;
  }
}
</style>
