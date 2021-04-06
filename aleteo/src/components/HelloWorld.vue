<template>
  <div class="home">
    <h1>Home</h1>
  </div>

  <div id="mysidenav" class="sidenav">
    <a href="#" class="closebtn" onclick='closeNav()'>x</a>
    <a href="">Home</a>
    <a href="">입력 데이터 관리</a>
    <a href="">모델 관리</a>
    <a href="">입력 데이터 분석</a>
    <a href="">모델 검증</a>
  </div>

  <span class="openmenu" onclick='openNav()'><img alt="Aleteo logo" src="../assets/ALETEOLOGO.png" width="180" height="120"></span>

</template>

<script>
export default {
  name: 'home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
/* 사이드바 스타일 */
.sidenav {
  height:100%;
  width: 0;
  position: fixed;
  z-index:1;
  top: 0;
  left: 0;
  background-color: rgb(77, 82, 239);
  overflow-x: hidden;
  transition:0.5s ease-in-out;
  padding-top: 60px;
}
.sidenav a {
  padding: 40px 8px 8px 32px;
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  display: block;
  transition: 0.2s ease-in-out;
}
.sidenav a:hover, .offcanvas a:focus {
  color: #000;
}
.closebtn { /* 사이드 바 x버튼 */
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px !important;
  margin-left: 50px;
}
.openmenu:hover {
  color:rgb(0,154,200);
  transition:0.5s ease-in-out;
}
.openmenu {
  font-size: 25px;
  cursor:pointer;
  transition:0.5s ease-in-out;
}
.openmenu > i {
  font-size: 30px;
}
/* 미디어쿼리 적용 */
@media screen and (max-height:450px) {
  .sidenav {
    padding-top:15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
