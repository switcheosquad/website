import { createRouter, createWebHistory } from "vue-router";
import HomeIndex from "../components/home/HomeIndex.vue";

const routes = [
  {
    path: "/",
    name: "index",
    component: HomeIndex,
  },
  {
    path: "/swag",
    name: "swag",
    component: () =>
      import(/* webpackChunkName: "swag" */ "../components/swag/SwagIndex.vue"),
  },
  {
    path: "/resources",
    name: "resources",
    component: () =>
      import(
        /* webpackChunkName: "resources" */ "../components/resources/ResourcesIndex.vue"
      ),
  },
  {
    path: "/sponsors",
    name: "sponsors",
    component: () =>
      import(
        /* webpackChunkName: "sponsors" */ "../components/sponsors/SponsorsIndex.vue"
      ),
  },
  {
    path: "/conduct",
    name: "conduct",
    component: () =>
      import(
        /* webpackChunkName: "conduct" */ "../components/conduct/ConductIndex.vue"
      ),
  },
  {
    path: "/disclaimer",
    name: "disclaimer",
    component: () =>
      import(
        /* webpackChunkName: "disclaimer" */ "../components/disclaimer/DisclaimerIndex.vue"
      ),
  },
  {
    path: "/privacy",
    name: "privacy",
    component: () =>
      import(
        /* webpackChunkName: "privacy" */ "../components/privacy/PrivacyIndex.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
