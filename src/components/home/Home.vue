<template>
  <div>
    <br>
    <h1>Bienvenue au club de développement de jeux vidéo de l'Université Laval</h1>
    <br />
    <h4 style="text-align:justify;margin-right: 30px;margin-left:30px;">
     Le club de développement de jeux vidéo de l'Université Laval a pour objectif  d'enrichir les connaissances en création de jeux vidéo
     des étudiants de la faculté des sciences et génie. Pour ce faire, le club propose des formations,
     des séances de travail et des conférences avec des professionnels de l'industrie. Ses membres sont encouragés à participer à des concours dans le but de réaliser des projets vidéoludiques.
    </h4>
<br />
    <!--Carousel Wrapper-->
    <div
      id="carousel-project-images"
      class="carousel slide carousel-fade"
      data-ride="carousel"
      data-interval="5000"
    >
      <!--Indicators-->
      <ol class="carousel-indicators">
        <li data-target="#carousel-project-images" data-slide-to="0" class="active"></li>
        <li data-target="#carousel-project-images" data-slide-to="1"></li>
        <li data-target="#carousel-project-images" data-slide-to="2"></li>
        <li data-target="#carousel-project-images" data-slide-to="3"></li>
        <li data-target="#carousel-project-images" data-slide-to="4"></li>
        <li data-target="#carousel-project-images" data-slide-to="5"></li>
      </ol>
      <!--/.Indicators-->

      <!--Slides-->
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <div class="view">
            <img src="logo_cdjvul.png" alt="Club de développement de jeux vidéo" />
            <div class="mask rgba-black-light"></div>
          </div>
          <div class="carousel-caption">
          </div>
        </div>
        <div class="carousel-item">
          <!--Mask color-->
          <div class="view">
            <img src="RunningDead_1920x1080.jpg" alt="The Running Dead" />
            <div class="mask rgba-black-strong"></div>
          </div>
          <div class="carousel-caption">
          </div>
        </div>
        <div class="carousel-item">
          <!--Mask color-->
          <div class="view">
            <img src="TheAdventuresOfLanceleau_1920x1200px.png" alt="Les Aventures de Lanceleau" />
            <div class="mask rgba-black-slight"></div>
          </div>
          <div class="carousel-caption">
          </div>
        </div>
        <div class="carousel-item">
          <!--Mask color-->
          <div class="view">
            <img src="Mail_592x488.png" alt="You Lost Mail!" />
            <div class="mask rgba-black-slight"></div>
          </div>
          <div class="carousel-caption">
          </div>
        </div>
        <div class="carousel-item">
          <!--Mask color-->
          <div class="view">
            <img src="WaterYouDoingLogo_1920x1200.png" alt="Water You Doing" />
            <div class="mask rgba-black-slight"></div>
          </div>
          <div class="carousel-caption">
          </div>
        </div>
        <div class="carousel-item">
          <!--Mask color-->
          <div class="view">
            <img src="Trap_1142x848.png" alt="Trap" />
            <div class="mask rgba-black-slight"></div>
          </div>
          <div class="carousel-caption">
          </div>
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
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carousel-project-images"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
      <!--/.Controls-->
    </div>
    <!--/.Carousel Wrapper-->
    <br>
    <br>
    <div class="card-deck">
      <div class="card bg-dark">
        <div class="card-body text-center">
          <h3 class="card-text">Restez à jour sur les événements</h3>
          <div>
            <a href="https://www.facebook.com/gamedevUlaval/" target="_blank">
            <div><img src="Facebook.svg.png" class="icons-link"/><a href="https://www.facebook.com/gamedevUlaval/" target="_blank" class="icon-box">Facebook</a></div>
            </a>
            <br/>
            <a href="https://www.facebook.com/gamedevUlaval/" target="_blank">
            <div><img src="slack.png" class="icons-link"/><a href="https://cfi-ul.slack.com/" target="_blank" class="icon-box">Slack</a></div>
            </a>
            <br/>
            <a href="https://www.facebook.com/gamedevUlaval/" target="_blank">
            <div><img src="discord.jpg" class="icons-link"/><a href="https://discord.gg/3WgpkMY" target="_blank" class="icon-box">Discord</a></div>
            </a>
          </div>
          <!-- <button>Inscrivez-vous à notre mailing liste</button> -->
        </div>
      </div>
      <div class="card bg-dark">
        <div class="card-body text-center">
          <h3 class="card-text">Responsable du club</h3>
          <img
            class="spotlight"
            alt="Image introuvable"
            src="https://scontent.fyhu2-1.fna.fbcdn.net/v/t31.0-8/p960x960/22550485_10210380328456967_3156504259055299734_o.jpg?_nc_cat=110&amp;_nc_ohc=ygF5RcqCYaMAX-vo9Y5&amp;_nc_ht=scontent.fyhu2-1.fna&amp;_nc_tp=1002&amp;oh=eb3420b07da9d83d39a0e4afafd8721a&amp;oe=5E9D523A"
          />
          <p>Antoine Olivier</p>
          <p>Étudiant au BAC en Informatique</p>
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
          <p>Mardi de 13h00 à 17h00</p>
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
export default {
  name: "Home",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-deck{
  width: 100%
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
  display:inline-block;
}

.icon-box {
  width: 50%;
  display:inline-block;
  color:white;
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
