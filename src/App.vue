<template>
  <router-view :key="$route.path"></router-view>
  <app-footer/>
</template>

<script>
import AppFooter from './components/AppFooter'
export default {
  components: { AppFooter },
  name: 'App',
  
}
</script>

<style>

</style>
