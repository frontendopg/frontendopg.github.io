<template>
  <HeaderComponent></HeaderComponent>
  <CompetensiesComponent></CompetensiesComponent>
  <SupportComponent></SupportComponent>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import CompetensiesComponent from '@/components/Competensies.vue'
import SupportComponent from '@/components/Support.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    CompetensiesComponent,
    SupportComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
