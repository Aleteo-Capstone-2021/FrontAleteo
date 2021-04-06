<template>
  <div id="nav">
<!--    <router-link to="/">Home</router-link>-->
<!--    <router-link to="/login">Login</router-link>-->
  </div>
  <router-view/>
</template>

<!--<script>-->
<!--import axios from 'axios';-->

<!--export default {-->
<!--  name: 'app',-->
<!--  async created () {-->
<!--    const { data } = await axios.get('/api/hello');-->
<!--    console.log(data);-->
<!--  }-->
<!--}-->
<!--</script>-->

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
