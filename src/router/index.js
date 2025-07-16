import { createRouter, createWebHistory } from "vue-router";
import PageHome from "@/components/views/PageHome.vue";
import PageHistory from "@/components/views/PageHistory.vue";
import PagePlayers from "@/components/views/PagePlayers.vue";
import PageStats from "@/components/views/PageStats.vue";
import PageSettings from "@/components/views/PageSettings.vue";

const routes = [
  { path: '/', name: 'Home', component: PageHome },
  { path: '/history', name: 'History', component: PageHistory },
  { path: '/players', name: 'Players', component: PagePlayers },
  { path: '/stats', name: 'Stats', component: PageStats },
  { path: '/settings', name: 'Settings', component: PageSettings },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
