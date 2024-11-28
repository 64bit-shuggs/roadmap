<script setup>
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import Tools from './components/ToolsUsed.vue';
import About from './components/About.vue';
import Services from './components/ServicesOffer.vue';
import Projects from './components/Projects.vue';
</script>

<template>
  <Navigation />
  <RouterView />
  <Services />
  <About />
  <Projects />
  <Tools />
  <Footer />
  
</template>
