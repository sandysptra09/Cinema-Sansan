<script>
import 'flowbite/dist/flowbite';

import { RouterLink, RouterView } from 'vue-router';

import NavbarComponent from './components/NavbarComponent.vue'


export default {
  name: 'App',
  components: {
    NavbarComponent,
  },
}
</script>

<template>
  <div>
    <NavbarComponent />
    <router-view />

  </div>
</template>

<style scoped></style>
