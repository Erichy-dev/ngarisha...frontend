import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/purchase",
      name: "purchase",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PurchaseView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/confirmselection",
      name: "confirmselection",
      component: () => import("../views/ConfirmSelectionView.vue"),
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
  ],
});

export default router;
