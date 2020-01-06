import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home/Home";
import Projet from "@/components/projet/Projet.vue";

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
    ]
});


export default router;