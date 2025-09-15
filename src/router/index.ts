import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import HomePage from "../modules/landing/pages/HomePage.vue";

export const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL),
routes: [
  {
        path: "/",
        name: "landing",
        component: () => import("@/modules/auth/pages/LoginPage.vue"),
        children:[
            {
                path: "/",
                name: "home",
                component: HomePage,
            },
            {
                path: "/features",
                name: "features",
                component: () => import("@/modules/landing/pages/FeaturesPages.vue"),
            },
            {
                path: "/pricing",
                name: "pricing",
                component: () => import("@/modules/landing/pages/PricingPage.vue"),
            },
            {
                path: "/contact",
                name: "contact",
                component: () => import("@/modules/landing/pages/ContactPage.vue"),
            },
        ] 
        // TODO: VER BIEN ESTO DE LAS RUTASHIJAS, REPASAR ESA ULTIMA APRTE DEL VIDEO
  },
    // Auth
    {
        path: "/auth",
        name: "auth",
        component: () => import("@/modules/auth/pages/LoginPage.vue"),
    },
    
],
})

export default router;