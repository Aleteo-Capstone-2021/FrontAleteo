<template>
  <div>
    <home/>
  </div>
    <a href=""> 프로젝트 선택 </a>
    <a href=""> 학습 선택 </a>
    <a href=""> 데이터 형식 지정 </a>
    <a href=""> 타겟 열 지정 </a>
    <a href=""> 데이터 치환 </a>
    <a href=""> 데이터 인코딩 </a>
    <a href=""> 데이터 정규화 </a>
    <a href=""> 타겟 열과의 상관관계 분석 </a>
    <a href=""> 학습 대상 칼럼 선택 </a>
    <a href=""> 학습 알고리즘 선택 </a>
    <a href=""> 모델 학습 </a>
    <a href=""> 모델 비교 </a>

</template>

<script>
import home from "@/views/Home";

export default {
  name: 'projectlist',
  components: {
    home // 메인의 좌측 카테고리 UI
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>
  .dick{
    color: red;
    background-color: #263343;
  }
body{
  color: red;
}
  a {
    text-decoration: none;
    color: white;
    display: inline-flex;
    /*justify-content: space-between;*/
    /*align-items: center;*/
    /*align-content: center;*/
    padding: 10px 30px 10px -10px;
    margin: 10px 100px 10px -100px;
    background-color: #263343;
    vertical-align: top;
    width: 200px;
    border: 1px solid #333333;


  }
</style>
