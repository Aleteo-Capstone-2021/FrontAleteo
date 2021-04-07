<template>
  <form @submit="handleSubmit">

    <div>
      <input type="text" class="form-control" v-model="id" placeholder="id 입력행">
    </div>
    <div>
      <input type="password" class="form-control" v-model="pw" placeholder="비밀번호 입력행">
    </div>

<!--    <button class="btn btn-primary btn-block">로그인</button>-->
    <a><router-link to="/home">로그인</router-link></a>
  </form>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'login',
    data() {
      return {
        id: '',
        pw: ''
      }
    },
    methods: {
      handleSubmit() {
        const data = {
          id : this.id,
          pw : this.pw
        };

        axios.post('http://localhost:8080/login', data)
          .then(
              res => {
                console.log(res);
              }
          ).catch(
              error => {
                console.log(error)
              }
        )

      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body{
  position: absolute;
  left: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
div{
  padding: 50px;
}
input{
  transition: all 0.5s ease-in-out;
  outline: none;
  padding: 20px 50px 20px 50px;
  border:none;

  border-bottom: gray 1px solid;
  font-size: 18px;
  cursor: pointer;
}
input:focus{
  box-shadow: 3px 3px 10px 2px #74b9ff;
}


</style>


