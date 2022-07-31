<template>
  <div id="login">
    <form @submit.prevent id = "loginForm">
      Sign in to vote or propose votes
      <br>
      <input type="text" class="loginField" placeholder="Address">
      <br>
      <input type="password" class="loginField" placeholder="Password">
      <br>
      <button id="signInBtn">Sign in</button>
    </form>
    <p id = "signUpBtnTextAbove">First time here?</p>
    <button id="signUpBtn">Sign up</button>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  components: {
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  font-family: poppins;
}
#loginForm{
  font-size: 2rem;
  color:black;
}
.loginField{
  font-size: 1.5rem;
  margin:1rem;
  background-color: #CCCCFF;
  width: 580px;
  height: 50px;
}
input::placeholder{
  color: gray;
}
#signInBtn{
  font-size:2rem;
  width:140px;
  height:70px;
  margin-top:1rem;
  background-color: #CCCCFF;
}
#signUpBtn{
  font-size:1.3rem;
  margin-left:460px;
  width:120px;
  height:60px;
  background-color: #CCCCFF;
}
#signUpBtnTextAbove{
  font-size:1.3rem;
  margin-left:470px;
}
#signUpBtn:hover{
   background-color: #9999FF;
   cursor: pointer;
}
#signInBtn:hover{
   background-color: #9999FF;
   cursor: pointer;
}
</style>
