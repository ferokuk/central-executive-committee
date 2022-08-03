<<<<<<< Updated upstream

<template>
  <div id="login" v-if="isSignedIn===false">
    <form @submit.prevent id = "loginForm">
      Sign in to vote or propose votes
      <br>
      <input type="text" class="loginField" placeholder="Address" v-model="address" @input="addressChangeHandler">
      <br>
      <input type="password" class="loginField" placeholder="Password" v-model="password" @input="passwordChangeHandler" autocomplete="off">
      <br>
      <button id="signInBtn" @click="signIn">Sign in</button>
    </form>
   <RegistrationForm></RegistrationForm>
  </div>
  <div v-else>
    <button @click="signOut" id = "signOutBtn">Sign out</button>
    <ProfileView  :name="name" :address="address" :status="status"></ProfileView>
  </div>
</template>
<script>

import ContractFunc from '@/contractWeb3'
import w3 from '@/connectWeb3'
import RegistrationForm from './RegistrationForm.vue'
import ProfileView from './ProfileView.vue'

export default {
  name: 'HomePage',
  components: {
  },
  data () {
    return {
      address: null,
      password: null,
      name: null,
      status: null,
      contract: null,
      web3: null,
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
        await this.contract.methods
        .login(this.address,this.password)
        .send({from:this.address,gas:100000})
        .catch(error => alert(error))
        .then(value => this.checkSuccess(value.events.LoginInformation.returnValues.information)) 
      
    },
    async signOut(){
        await this.contract.methods.logout().send({from:this.address}).then(value => this.checkSuccess(value.events.LoginInformation.returnValues.information))
        //await this.web3.eth.personal.lockAccount(this.address).then(console.log('locked'))
    },
    async checkSuccess (_information) {
      if(_information === 'Logged in successfully!'){
        await this.contract.methods.Users(this.address).call().then(value => this.parseUserData (value.name,value.status))
        this.isSignedIn = true
      }
      else if(_information === 'Logged out successfully!'){
       // await this.web3.eth.personal.lockAccount(this.address)
        this.isSignedIn = false
      }
      else{
         //await this.web3.eth.personal.lockAccount(this.address).then(console.log('locked by error'))
      }
    },
    parseUserData (_name,_status) {
      this.name = _name
      this.status = _status
    }
  },
  components: { RegistrationForm, ProfileView}
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
#signOutBtn{
  font-size:1.3rem;
  width:120px;
  height:60px;
  background-color: beige;
}
#signOutBtn:hover{
   background-color:blanchedalmond;
   cursor: pointer;
}
</style>
=======
<template>
  <div id="login" v-if="isSignedIn===false">
    <form @submit.prevent id = "loginForm">
      Sign in to vote or propose votes
      <br>
      <input type="text" class="loginField" placeholder="Address" v-model="address" @input="addressChangeHandler">
      <br>
      <input type="password" class="loginField" placeholder="Password" v-model="password" @input="passwordChangeHandler" autocomplete="off">
      <br>
      <button id="signInBtn" @click="signIn">Sign in</button>
    </form>
   <RegistrationForm></RegistrationForm>
  </div>
  <div v-else>
    <button @click="signOut" id = "signOutBtn">Sign out</button>
    <ProfileView  :name="name" :address="address" :status="status"></ProfileView>
  </div>
</template>
<script>

import ContractFunc from '@/contractWeb3'
import w3 from '@/connectWeb3'
import RegistrationForm from './RegistrationForm.vue'
import ProfileView from './ProfileView.vue'

export default {
  name: 'HomePage',
  components: {
  },
  data () {
    return {
      address: null,
      password: null,
      name: null,
      status: null,
      contract: null,
      web3: null,
      isSignedIn: false
    }
  },
  async mounted () {
    this.contract = await ContractFunc
    this.web3 = w3()
    const accounts = await this.web3.eth.getAccounts()
    await this.web3.eth.personal.unlockAccount(accounts[0],"").then(this.web3.eth.defaultAccount = accounts[0])
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
        await this.contract.methods
        .login(this.address,this.password)
        .send({from:this.web3.eth.defaultAccount,gas:1000000})
        .catch(error => alert(error))
        .then(value => this.checkSuccess(value.events.LoginInformation.returnValues.information)) 
      
    },
    async signOut(){
        await this.contract.methods.logout().send({from:this.web3.eth.defaultAccount}).then(value => this.checkSuccess(value.events.LoginInformation.returnValues.information))
        //await this.web3.eth.personal.lockAccount(this.address).then(console.log('locked'))
    },
    async checkSuccess (_information) {
      if(_information === 'Logged in successfully!'){
        await this.contract.methods.Users(this.address).call().then(value => this.parseUserData (value.name,value.status))
        this.isSignedIn = true
      }
      else if(_information === 'Logged out successfully!'){
        this.isSignedIn = false
      }
    },
    parseUserData (_name,_status) {
      this.name = _name
      this.status = _status
    }
  },
  components: { RegistrationForm, ProfileView}
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
#signOutBtn{
  font-size:1.3rem;
  width:120px;
  height:60px;
  background-color: beige;
}
#signOutBtn:hover{
   background-color:blanchedalmond;
   cursor: pointer;
}
</style>
>>>>>>> Stashed changes
