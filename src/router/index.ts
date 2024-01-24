import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta?.env?.BASE_URL || ""),
  routes: [
    {
      path: "/",
      redirect: { name: "dashboard" }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/views/DashboardView.vue")
    },
    {
      path: "/login",
      name: "auth.login",
      component: () => import("@/views/auth/LoginView.vue")
    },
    {
      path: "/register",
      name: "auth.register",
      component: () => import("@/views/auth/RegisterView.vue")
    },
  ]
});

export default router;
