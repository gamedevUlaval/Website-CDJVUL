import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home/Home";
import Projet from "@/components/projet/Projet.vue";
import ProjectOverview from "@/components/projet/ProjectOverview.vue";
import Information from "@/components/information/Information"

Vue.use(Router);

let router = new Router({
    routes: [{
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/projets",
            name: "Projet",
            component: Projet,
        },
        {
            path: "/projets/:projectIndex",
            name: "ProjectOverview",
            props: true,
            component: ProjectOverview,
        },
        {
            path: "/information",
            name: "Information",
            component: Information,
        },
    ]
});


export default router;