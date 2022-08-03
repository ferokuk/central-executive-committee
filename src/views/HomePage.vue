
<template>
  <div id="login" v-if="isSignedIn===false">
    <form @submit.prevent id = "loginForm">
      Sign in to vote or propose votes
      <br>
      <input type="text" class="loginField" placeholder="Address" v-model="address" @input="addressChangeHandler">
      <br>
      <input type="password" class="loginField" placeholder="Password" v-model="password" @input="passwordChangeHandler" autocomplete="on">
      <br>
      <button id="signInBtn" @click="signIn">Sign in</button>
    </form>
    <RegistrationForm></RegistrationForm>
  </div>
  <ProfileView v-else></ProfileView>
</template>

<script>
import RegistrationForm from '@/views/RegistrationForm.vue'
import ProfileView from '@/views/ProfileView.vue'
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
      status: null,
      isSignedIn: false
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
    },
    async signIn () {
      if(!this.web3.utils.isAddress(this.address)) {
        alert("Please, check your address!")
        return
      }
      await this.web3.eth.personal.unlockAccount(this.address,"").then(console.log("unlocked"))
      try{
        await this.contract.methods
        .login(this.address,this.password)
        .send({from:this.address,gas:100000})
        .then(
        )
      }catch (e){
        alert(e)
        return
      }
      this.status = await this.contract.methods.Users(this.address).call().then(value => value.status),
      this.isSignedIn = true
    }
  },
  components: { RegistrationForm, ProfileView, RegistrationForm }
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

