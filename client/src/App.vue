<template>
  <div id="app">
    <button class='mainButtons' @click='goGet' >
      Get Contacts
      </button>
    <button class='mainButtons' @click='goCreate' >
      Create Contact
      </button>
    <button class='mainButtons' @click='goUpdate' >
      Update
      </button>
    <br>
    <br>
    <img class="logo" src="./assets/logo.svg">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    async goGet () {
      this.$router.push({name: 'get'})
    },
    async goCreate () {
      this.$router.push({name: 'post'})
    },
    async goUpdate () {
      this.$router.push({name: 'update'})
    }
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
  margin-top: 60px;
}
.logo {
  width: 200px;
}
.mainButtons {
  width: 30%;
  background-color: #5FB7FF;
  font-size: 30px;
  border-color: white;
  border-width: 5px;
}
</style>
