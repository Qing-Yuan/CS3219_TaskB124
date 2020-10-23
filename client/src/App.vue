<template>
  <div id="app">
    <top-header></top-header>
    <img class="logo" src="./assets/logo.svg">
    <router-view/>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader'
export default {
  name: 'App',
  components: {
    'top-header': TopHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  width: 200px;
  margin: 60px;
}
</style>
