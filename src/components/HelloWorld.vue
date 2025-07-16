<template>
  <v-app>
    <div class="bg-wite-900 min-h-screen text-white">
      <!-- Header -->
      <header class="bg-zinc-800 flex items-center justify-between px-6 py-4">
        <div class="flex items-center space-x-3">
          <!-- Fundo branco atrás da logo -->
          <div class="bg-white p-1 rounded-full">
            <img
              src="@/assets/logo.png"
              alt="Logo Killers"
              class="w-18 h-18 rounded-full"
            />
          </div>
          <h1 class="text-2xl ml-10 font-bold text-red-600">Killers FC</h1>
        </div>
        <v-btn color="red darken-1" dark>Nova Temporada</v-btn>
      </header>
      <!-- Conteúdo Principal -->
      <main class="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Jogadores -->
        <section class="md:col-span-2">
          <h2 class="text-xl font-semibold mb-4">Escalação</h2>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="jogador in jogadores"
                :key="jogador.id"
                cols="12"
                sm="6"
                md="4"
              >
                <v-card
                  class="hover:scale-105 transition transform duration-300"
                >
                  <v-card-title>
                    {{ jogador.nome }}
                  </v-card-title>
                  <v-card-subtitle>
                    {{ jogador.posicao }} • Nº {{ jogador.numero }}
                  </v-card-subtitle>
                  <v-card-actions>
                    <v-btn icon color="red">
                      <v-icon>mdi-soccer</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </section>

        <!-- Painel lateral -->
        <aside class="bg-gray-800 rounded-lg p-4 space-y-4">
          <h2 class="text-lg font-semibold">Painel</h2>
          <div>
            <p><strong>Saldo:</strong> R$ {{ saldo.toFixed(2) }}</p>
            <p><strong>Vitórias:</strong> {{ estatisticas.vitorias }}</p>
            <p><strong>Derrotas:</strong> {{ estatisticas.derrotas }}</p>
          </div>
          <v-btn color="blue" block>Ver Calendário</v-btn>
        </aside>
      </main>
    </div>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const jogadores = ref([
  { id: 1, nome: "Anderson", posicao: "Zagueiro", numero: 4 },
  { id: 2, nome: "Rafael", posicao: "Atacante", numero: 9 },
  { id: 3, nome: "Lucas", posicao: "Goleiro", numero: 1 },
]);

const saldo = ref(1850.75);
const estatisticas = ref({
  vitorias: 10,
  derrotas: 2,
});
</script>
