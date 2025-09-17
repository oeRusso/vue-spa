import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import HomePage from "../modules/landing/pages/HomePage.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: () => import("@/modules/auth/pages/LoginPage.vue"),
      children: [
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
      ],
      // TODO: VER BIEN ESTO DE LAS RUTASHIJAS, REPASAR ESA ULTIMA APRTE DEL VIDEO
    },
    // Auth
    {
      path: "/auth",
      redirect: "/login",
      component: () => import("@/modules/auth/layouts/AuthLayout.vue"),
      children: [
        {
          path: "/login",
          name: "login",
          component: () => import("@/modules/auth/pages/LoginPage.vue"),
        },
        {
          path: "/register",
          name: "register",
          component: () => import("@/modules/auth/pages/RegisterPage.vue"),
        },
      ],
    },
  ],
});

//TODO: ENTENDER BIEN TODO ESE CODIGO DE ARRIBA, COMO FUNCIONA CON LOS VIEWROUTER Y DEMAS

export default router;
