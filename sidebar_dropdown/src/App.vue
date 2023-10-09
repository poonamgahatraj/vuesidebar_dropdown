<script setup>


import sidebarnav from './pages/sidebarnav.vue';
import about from './components/about.vue';
import clients from './components/clients.vue';
import contact from './components/contact.vue';
import sevices from './components/sevices.vue';

</script>

<template>
<router-link to ="/about">about</router-link>
<router-link to ="/clients">clients</router-link>
<router-link to ="/contact">contact</router-link>
<router-link to ="/sevices">sevices</router-link>

<router-view></router-view>
  <sidebarnav/>
 
</template>

<style scoped>

</style>
