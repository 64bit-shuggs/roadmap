<script setup>
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import Tools from './components/ToolsUsed.vue';
</script>

<template>
  <Navigation />

  <RouterView />

  <Tools />
  <Footer />
  
</template>
