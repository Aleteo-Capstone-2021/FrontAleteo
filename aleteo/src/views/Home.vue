<template>
  <div class="Home">
    <img alt="Vue logo" src="../assets/ALETEOLOGO.png" width="180" height="120">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>

  <div id="mysidenav" class="sidenav">

    <a href=""> Home </a>
    <a href=""> 입력 데이터 관리 </a>
    <a href=""> 모델 관리 </a>
    <a href=""> 입력 데이터 분석 </a>
    <a href=""> 모델 검증 </a>

  </div>
</template>

<script>
// @ is an alias to /src
import home from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    home
  }
}
</script>

<style>
  .sidenav {
    height:100%;
    width: 300px;
    position: fixed;
    z-index:1;
    top: 0;
    left: 0;
    background-color: rgb(77, 82, 239);
    padding-top: 100px;

  }
  .sidenav a{
    padding: 40px 8px 8px 32px;
    text-decoration: none;
    font-size: 20px;
    color: #ffffff;
    display: block;
    transition: 0.2s ease-in-out;
  }
</style>
