<template>
  <HeaderComponent></HeaderComponent>
  <CompetensiesComponent></CompetensiesComponent>
  <SupportComponent></SupportComponent>
  <RatesComponent></RatesComponent>
  <TimeComponent></TimeComponent>
  <TeamComponent></TeamComponent>
  <SliderComponent></SliderComponent>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import CompetensiesComponent from '@/components/Competensies.vue'
import SupportComponent from '@/components/Support.vue'
import RatesComponent from '@/components/RatesComponent.vue'
import TimeComponent from './components/TimeComponent.vue'
import TeamComponent from '@/components/Team.vue'
import SliderComponent from '@/components/SliderComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    CompetensiesComponent,
    SupportComponent,
    RatesComponent,
    TimeComponent,
    TeamComponent,
    SliderComponent
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
}
</style>
