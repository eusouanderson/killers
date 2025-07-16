<template>
  <v-navigation-drawer
    v-model="isOpen"
    temporary
    app
    class="bg-zinc-900 text-white"
  >
    <LogoComponent />
    <v-list dense>
      <v-list-item
        v-for="(item, i) in menu"
        :key="i"
        link
        @click="navigate(item)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch, defineProps } from "vue";

const props = defineProps<{ modelValue: boolean }>();
const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(props.modelValue);

watch(
  () => props.modelValue,
  (val) => (isOpen.value = val)
);
watch(isOpen, (val) => emit("update:modelValue", val));

const menu = [
  { label: "Dashboard", icon: "mdi-view-dashboard" },
  { label: "Jogadores", icon: "mdi-soccer" },
  { label: "Estatísticas", icon: "mdi-chart-bar" },
  { label: "Configurações", icon: "mdi-cog" },
];

function navigate(item: any) {
  console.log("Navegar para", item.label);
}
</script>
