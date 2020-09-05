import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home/Home";
import Projet from "@/components/projects/Projects.vue";
import ProjectOverview from "@/components/projects/ProjectOverview.vue";
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
            name: "Projects",
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