<template>
  <div class="flex items-center space-x-4">
    <div class="bg-white p-1 rounded-full border-2 border-red-600 shadow-md">
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
</template>

<script setup lang="ts"></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap");

.font-header {
  font-family: "Montserrat", sans-serif;
}
</style>
