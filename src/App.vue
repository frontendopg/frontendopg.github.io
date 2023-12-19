<template>
  <HeaderComponent></HeaderComponent>
  <CompetensiesComponent></CompetensiesComponent>
  <SupportComponent></SupportComponent>
  <RatesComponent></RatesComponent>
  <TimeComponent></TimeComponent>
  <TeamComponent></TeamComponent>
  <CaseComponent></CaseComponent>
  <SliderComponent></SliderComponent>
  <CollabsComponent></CollabsComponent>
  <FAQComponent></FAQComponent>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import CompetensiesComponent from '@/components/Competensies.vue'
import SupportComponent from '@/components/Support.vue'
import RatesComponent from '@/components/RatesComponent.vue'
import TimeComponent from './components/TimeComponent.vue'
import TeamComponent from '@/components/Team.vue'
import CaseComponent from './components/CaseComponent.vue'
import SliderComponent from '@/components/SliderComponent.vue'
import CollabsComponent from '@/components/CollabsComponent.vue'
import FAQComponent from '@/components/FAQComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    CompetensiesComponent,
    SupportComponent,
    RatesComponent,
    TimeComponent,
    TeamComponent,
    CaseComponent,
    SliderComponent,
    CollabsComponent,
    FAQComponent
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
