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
              <input type="password" placeholder="Your password" required v-model="password">
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
export default {
  name: 'RegistrationForm',
  data () {
    return {
      address: null,
      password: null,
      name: null,
      status: null,
      openForm: false
    }
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
    signUp () {
      console.log(this.address, this.password, this.name, this.status)
      this.showRegistrationForm()
      this.address = this.password = this.name = this.status = null
    }
  }
}
</script>

<style scoped>
#signUpBtn{
  font-size:1.3rem;
  width:120px;
  height:60px;
  background-color: #CCCCFF;
}
#signUpBtn:hover{
   background-color: #9999FF;
   cursor: pointer;
}
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
