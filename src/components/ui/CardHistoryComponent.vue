<template>
  <v-container class="py-10">
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card elevation="4" class="rounded-2xl">
          <v-card-title
            class="text-3xl font-bold text-center text-zinc-800 py-6 bg-zinc-100 rounded-t-2xl"
          >
            História do Killers FC
          </v-card-title>

          <v-card-text
            class="text-base leading-relaxed text-zinc-50 p-6 space-y-4"
          >
            <p>
              O <strong>Killers FC</strong> nasceu da paixão pelo futebol e do
              desejo de criar um time diferente, que mistura talento, estratégia
              e união. Desde sua fundação, o clube tem como objetivo principal
              promover o futebol de forma divertida e competitiva.
            </p>

            <p>
              Iniciamos com apenas 7 jogadores e muita vontade de vencer. Com o
              tempo, fomos estruturando nosso elenco, aprimorando táticas e
              fortalecendo nossos laços como equipe.
            </p>

            <p>
              Participamos de campeonatos locais, amistosos, torneios online e
              conquistamos títulos importantes que nos colocaram em destaque na
              região.
            </p>

            <p>
              Hoje, o Killers FC é mais do que um time — é uma família. E a
              nossa história continua sendo escrita a cada jogo.
            </p>
          </v-card-text>

          <v-card-actions class="justify-center pb-6">
            <v-btn
              color="red darken-2"
              class="text-white px-6 py-3 rounded-xl"
              @click="voltarParaHome"
            >
              Voltar para o Início
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const voltarParaHome = () => {
  window.history.back();
};
</script>
