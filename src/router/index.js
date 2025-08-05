import PageHistory from "@/components/views/PageHistory.vue";
import PageHome from "@/components/views/PageHome.vue";
import PagePlayers from "@/components/views/PagePlayers.vue";
import PageSettings from "@/components/views/PageSettings.vue";
import PageStats from "@/components/views/PageStats.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: PageHome },
  { path: "/history", name: "History", component: PageHistory },
  { path: "/players", name: "Players", component: PagePlayers },
  { path: "/stats", name: "Stats", component: PageStats },
  { path: "/settings", name: "Settings", component: PageSettings },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
