<template>
  <div id="login">
    <form @submit.prevent id = "loginForm">
      Sign in to vote or propose votes
      <br>
      <input type="text" class="loginField" placeholder="Address">
      <br>
<<<<<<< Updated upstream
      <input type="password" class="loginField" placeholder="Password">
=======
      <input type="password" @input="passwordChangeHandler" v-model="password" class="loginField" placeholder="Password" required autocomplete="on">
>>>>>>> Stashed changes
      <br>
      <button id="signInBtn">Sign in</button>
    </form>
    <p id = "signUpBtnTextAbove">First time here?</p>
    <button id="signUpBtn">Sign up</button>
  </div>
</template>

<script>
<<<<<<< Updated upstream

export default {
  name: 'HomePage',
  components: {
  }
=======
import RegistrationForm from '@/views/RegistrationForm.vue'
import ContractFunc from '@/contractWeb3'
import w3 from '@/connectWeb3'
export default {
  name: 'HomePage',
  data () {
    return {
      address: null,
      password: null,
      contract: null,
      web3: null,
    }
  },
  async mounted () {
    this.contract = await ContractFunc
    this.web3 = w3()
    
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
>>>>>>> Stashed changes
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
