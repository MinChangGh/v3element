export const pubRouter = [
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404.vue"),
    hidden: true,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
    hidden: true,
  },
  {
    path: "/index",

    name: "index",
    component: () => import("@/views/index.vue"),
  
  },
];
