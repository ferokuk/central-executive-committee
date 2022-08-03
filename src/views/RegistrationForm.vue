<template>
     <button id="signUpBtn" @click="showRegistrationForm">Sign up</button>
     <div v-if="openForm" class="form">
        <div class="form-content">
            <form @submit.prevent>
              <button id="closeFormBtn" @click="showRegistrationForm">Close</button>
              <br>
              <input type="text" placeholder="Your name" required v-model="name">
              <br>
              <input type="text" placeholder="Your address" required v-model="address">
              <br>
              <input type="password" placeholder="Your password" required v-model="password" autocomplete="off">
              <br>
              <div class="status-picker">
              <input type="radio" name="status" value="Elder" id="elder" required v-model="status">
              <label for="elder">Elder</label>
              <input type="radio" name="status" value="Member" id="member" required v-model="status">
              <label for="member">Member</label>
              <br>
              </div>
              <button id="createUserBtn" @click="signUp">Sign Up</button>
          </form>
        </div>
     </div>
</template>

<script>
import ContractFunc from '@/contractWeb3'
import w3 from '@/connectWeb3'
export default {
  name: 'RegistrationForm',
  data () {
    return {
      address: null,
      password: null,
      name: null,
      status: null,
      openForm: false,
      web3: null,
    }
  },
  async mounted () {
    this.contract = await ContractFunc
    this.web3 = w3()
    
  },
  methods: {
    showRegistrationForm () {
      this.openForm = !this.openForm
    },
    addressChangeHandler (event) {
      this.address = event.target.value
    },
    passwordChangeHandler (event) {
      this.password = event.target.value
    },
    nameChangeHandler (event) {
      this.name = event.target.value
    },
    statusChangeHandler (event) {
      this.status = event.target.value
    },
   async signUp () {
      if(!this.web3.utils.isAddress(this.address)){
        alert("Please, check your address!")
        return
      }
      try{
      this.showRegistrationForm()
      await this.web3.eth.personal.unlockAccount(this.address,"").then(console.log("unlocked"))
      await this.contract.methods
      .createUser(this.name,this.password,this.address,this.status)
      .send({from:this.address,gas:300000})
      .then(console.log("created"))
      this.address = this.password = this.name = this.status = null
      }catch (e) {
        alert(e)
        await this.web3.eth.personal.lockAccount(this.address)
        return
      }
    }
  }
}
</script>

<style scoped>
#createUserBtn{
  font-size:1.3rem;
  width:120px;
  height:60px;
  background-color: #CCCCFF;
}
#createUserBtn:hover{
   background-color: #9999FF;
   cursor: pointer;
}
#closeFormBtn{
  font-size:1.3rem;
  width:120px;
  height:60px;
  background-color: #CCCCFF;
  top: 0;
  left:0;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-right: 484px;
}
#closeFormBtn:hover{
   background-color: #9999FF;
   cursor: pointer;
}
.form{
    top:0;
    bottom:0;
    right:0;
    left:0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.5);
    position: fixed;
}
.form-content{
    margin: auto;
    background: white;
    border-radius: 10px;
    min-height: 310px;
    min-width: 600px;
    padding: 25px;
}
input{
  font-size: 1.8rem;
  background-color: #CCCCFF;
  width: 600px;
  height: 50px;
  margin: auto;
  display: block;
  font-style: poppins;
}
input::placeholder{
  color: gray;
}
.status-picker{
    justify-content: center;
    align-items: center;
    margin:0;
    padding: 0;
}
</style>
