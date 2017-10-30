<template>
  <div id="app">
    <nav-bar/>
    <router-view id="main"/>
    <footer-bar/>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar'
import FooterBar from './components/FooterBar'

export default {
  name: 'app',
  components: {
    navBar: NavigationBar,
    footerBar: FooterBar
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

#main {
  margin: 0% 5% 0% 5%;
  text-align: left;
}
</style>
