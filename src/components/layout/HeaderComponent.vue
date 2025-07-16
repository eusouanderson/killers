<template>
  <header
    class="bg-gray-900 flex items-center justify-between px-6 py-4 shadow-lg border-b border-gray-700"
  >
    <div class="flex items-center space-x-4">
      <!-- Botão Hamburguer (somente mobile) -->
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

      <!-- Logo -->
      <div class="flex items-center space-x-4">
        <div
          class="bg-white p-1 rounded-full border-2 border-red-600 shadow-md"
        >
          <img
            src="@/assets/logo.png"
            alt="Logo Killers FC"
            class="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
          />
        </div>

        <h1
          class="text-2xl md:text-3xl font-bold text-red-600 font-header tracking-tight"
        >
          KILLERS <span class="text-white">FC</span>
        </h1>
      </div>
    </div>

    <!-- Botão Nova Temporada (somente desktop) -->
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
  </header>
</template>

<script setup lang="ts">
const novaTemporada = () => {
  console.log("Iniciar nova temporada");
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap");

.font-header {
  font-family: "Montserrat", sans-serif;
}
</style>
