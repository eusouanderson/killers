<template>
  <v-app>
    <AppSidebar v-model="sidebarOpen" />
    <AppHeader @toggle-sidebar="sidebarOpen = !sidebarOpen" />
    <PageHome />
    <v-main class="bg-gray-100">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AppHeader from "@/components/layout/HeaderComponent.vue";
import AppSidebar from "@/components/layout/SidebarComponent.vue";
import PageHome from "./components/views/PageHome.vue";
import { ref } from "vue";

const sidebarOpen = ref(false);
</script>
