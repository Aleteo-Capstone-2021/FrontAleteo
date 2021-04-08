<template>
  <div class="Home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>

  <div id="mysidenav" class="sidenav">
    <a><router-link to="/home"><img alt="Vue logo" src="../assets/garo.png" width="150" height="48"></router-link></a>
    <a><router-link to="/projectlist"><h1>프로젝트</h1></router-link></a>
    <a><router-link to="/learninglist"><h2>학습</h2></router-link></a>
    <a><router-link to="/learninglist/dataform"> - 데이터 형식</router-link></a>
    <a><router-link to="/learninglist/learning_data"> - 데이터</router-link></a>
    <a><router-link to="/learninglist/algorithm"> - 알고리즘</router-link></a>
    <a><router-link to="/learninglist/learning"> - 학습</router-link></a>
    <a><router-link to="/learninglist/compare_learning_result"> - 결과 비교</router-link></a>
    <a><router-link to="/predictlist"><h2>예측</h2></router-link></a>
    <a><router-link to="/predictlist/predict_data"> - 데이터</router-link></a>
    <a><router-link to="/predictlist/predict"> - 예측</router-link></a>
    <a><router-link to="/predictlist/compare_predict_result"> - 결과 비교</router-link></a>
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
    width: 178px;
    position:fixed;
    top: -30px;
    left: 0;
    background-color: rgb(29, 187, 208);
    padding-top: 30px;

  }
  .sidenav a{
    padding: 30px 8px 0 0;
    height: 40px;
    text-decoration: none;
    font-size: 17px;
    color: #ffffff;
    display: block;
    transition: 0.2s ease-in-out;
  }
</style>
