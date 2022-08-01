<template>
  <div id="login">
    <form @submit.prevent id = "loginForm">
      Sign in to vote or propose votes
      <br>
      <input type="text" @input="addressChangeHandler" v-model="address" class="loginField" placeholder="Address" required>
      <br>
      <input type="password" @input="passwordChangeHandler" v-model="password" class="loginField" placeholder="Password" required>
      <br>
      <button id="signInBtn">Sign in</button>
    </form>
    <p id = "signUpBtnTextAbove">First time here?</p>
    <RegistrationForm>
    </RegistrationForm>
  </div>
</template>

<script>
import RegistrationForm from './RegistrationForm.vue'

export default {
  name: 'HomePage',
  data () {
    return {
      address: null,
      password: null,
      show: false
    }
  },
  methods: {
    addressChangeHandler (event) {
      this.address = event.target.value
    },
    passwordChangeHandler (event) {
      this.password = event.target.value
    }
  },
  components: { RegistrationForm }
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
  width: 600px;
  height: 50px;
  font-style: poppins;
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
#signUpBtnTextAbove{
  margin-top:1rem;
  font-size:1.3rem;
}
#signInBtn:hover{
   background-color: #9999FF;
   cursor: pointer;
}
</style>
