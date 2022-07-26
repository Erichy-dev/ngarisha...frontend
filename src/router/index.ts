import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PurchaseViewVue from "../views/PurchaseView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/confirmselection:/selected",
      name: "confirmselection",
      component: () => import("../views/ConfirmSelectionView.vue"),
      props: true,
    },
    {
      path: "/purchase",
      name: "purchase",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PurchaseViewVue,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/approve",
      name: "approve",
      component: () => import("../views/ApprovalView.vue"),
    },
    {
      path: "/reviews",
      name: "reviews",
      component: () => import("../views/ReviewsView.vue"),
    },
    {
      path: "/thankYou",
      name: "thankYou",
      component: () => import("../views/ThankYouView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: HomeView,
    },
  ],
});

export default router;
