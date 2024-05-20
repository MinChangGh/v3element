import { createRouter, createWebHashHistory } from "vue-router";
import { pubRouter } from "@/router/public";



const routes = [
    ...pubRouter
  ];

  console.log(routes)

  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  export default router;  
  