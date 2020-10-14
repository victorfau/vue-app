<template>
  <div id="app">
      <Admin_navigation v-if="is_auth"/>
      <Navigation v-if="!/\/admin\//.test($route.fullPath)"/>
      <div id="main">
          <router-view/>
      </div>
      <Footer v-if="!/\/admin\//.test($route.fullPath)"/>
  </div>
</template>

<script>
import Navigation from "./components/navigation/navigation";
import initial_config from './service/data.json'
import Footer from "./components/footer/footer";
import Admin_navigation from "./components/admin/components/admin_navigation";

export default {
  name: 'App',
    components: {Admin_navigation, Footer, Navigation},
    computed: {
        is_auth(){
            return this.$store.state.user.is_auth
        }
    }
}
</script>

<style>
#main {
    z-index: 0;
    position: relative;
}
</style>
