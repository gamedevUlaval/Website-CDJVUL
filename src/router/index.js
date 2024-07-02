import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/home/Home.vue";
import Projet from "@/components/projects/Projects.vue";
import ProjectOverview from "@/components/projects/ProjectOverview.vue";
import Information from "@/components/information/Information.vue"

let router = createRouter({
    history: createWebHistory(),
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
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { left: 0, top: 0 }
        }
    }
});


export default router;