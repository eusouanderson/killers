<script setup lang="ts">
import LogoComponent from "@/components/ui/LogoComponent.vue";
import Logo from "@/components/ui/LogoComponent.vue";

const novaTemporada = () => {
  console.log("Iniciar nova temporada");
};
</script>

<template>
  <header
    class="bg-zinc-900 flex items-center justify-between px-6 py-4 shadow-lg border-b border-zinc-700"
  >
    <!-- Esquerda -->
    <Logo />

    <!-- Direita -->
    <div class="flex items-center space-x-4">
      <!-- Desktop: Botão nova temporada -->
      <button
        @click="novaTemporada"
        class="hidden md:flex items-center justify-center px-6 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white font-medium rounded-md shadow-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clip-rule="evenodd"
          />
        </svg>
        Nova Temporada
      </button>

      <!-- Mobile: Botão hamburguer -->
      <button
        class="text-white md:hidden focus:outline-none focus:ring-2 focus:ring-red-500 rounded-md p-1"
        @click="$emit('toggle-sidebar')"
        aria-label="Abrir menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </header>
</template>
