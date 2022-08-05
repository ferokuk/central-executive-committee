<template>
    <button class="propose" id="proposeVoteBtn" @click="changeOpenForm">Propose new vote</button>
     <div v-if="openForm" class="form">
        <div class="form-content">
            <form @submit.prevent>
              <button class="propose" id="closeFormBtn" @click="changeOpenForm">Close</button>
              <br>
              <input type="text" placeholder="Vote's name" required v-model="name" @input="nameChangeHandler">
              <br>
              <textarea id="info" cols="10" rows="10" placeholder="Write some information" @input="infoChangeHandler" v-model="info"></textarea>
              <!-- <input type="text" class="info" placeholder="Write here some information" required v-model="info" @input="infoChangeHandler"> -->
              <br>
              <input type="text" placeholder="Amount of votes needed to be approved" required v-model="amountVotesNeeded" @input="expirationDateChangeHandler">
              note: this only applies to members.
              <br>
              <input type="date" placeholder="Expiration date" required v-model="expirationDate" @input="expirationDateChangeHandler">
              <br>
              <input type="text" placeholder="Percent for approval" required v-model="percentForApproval" @input="percentForApprovalChangeHandler">
              note: this only applies to members.
              <br>
              <button class="propose" id="proposeBtn" @click="proposeVote">Propose</button>
          </form>
        </div>
     </div>
</template>
<script>
import ContractFunc from '@/contractWeb3'
import w3 from '@/connectWeb3'
export default{
  data () {
    return {
        name: null,
        info: '',
        amountVotesNeeded: null,
        expirationDate: '',
        percentForApproval: null,
        openForm: false,
        contract: null,
        web3: null
    }
  },
  async mounted (){
    this.contract = await ContractFunc
    this.web3 = w3()
    const accounts = await this.web3.eth.getAccounts()
    await this.web3.eth.personal.unlockAccount(accounts[0],"").then(this.web3.eth.defaultAccount = accounts[0])
  },
  methods: {
    changeOpenForm () {
        this.openForm = !this.openForm
    },
    nameChangeHandler (event) {
        this.name = event.target.value
    },
    infoChangeHandler (event) {
        this.info = event.target.value
    },
    expirationDateChangeHandler (event) {
        this.expirationDate = event.target.value
    },
    amountVotesNeededChangeHandler (event) {
        this.amountVotesNeeded = event.target.value
    },
    percentForApprovalChangeHandler (event) {
        this.percentForApproval = event.target.value
    },
    async proposeVote () {
        if(this.percentForApproval > 100 || this.percentForApproval < 0){
            alert("Invalid percent for approval!")
            return
        }
        this.changeOpenForm()
        await this.contract.methods
        .proposeVote(this.name,this.info,this.amountVotesNeeded,this.expirationDate,this.percentForApproval)
        .send({from:this.web3.eth.defaultAccount,gas:3000000})
        .then(value => alert(value.events.VoteProposing.returnValues.result))
    }
  }
}
</script>
<style scoped>
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
    min-height: 510px;
    min-width: 650px;
    padding: 25px;
}
#info{
  font-size: 1.8rem;
  background-color: beige;
  width: 600px;
  height: 150px;
  margin: auto;
  display: block;
  font-style: poppins;
  border: 2px solid;
  font-size: 20px;
  resize: none;
}
input{
  font-size: 1.8rem;
  background-color: beige;
  width: 600px;
  height: 50px;
  margin: auto;
  display: block;
  font-style: poppins;
}
input::placeholder{
  color: gray;
}
.propose{
     font-size: 2rem;
    background-color: beige;
    width:200px;
    height:100px;
}
.propose:hover{
    cursor: pointer;
    background-color:blanchedalmond;
}
#proposeVoteBtn{
    font-size: 2rem;
    background-color: beige;
}
#proposeVoteBtn:hover{
    cursor: pointer;
    background-color:blanchedalmond;
}
#proposeBtn{
    
}
#closeFormBtn{
    width:120px;
    height:60px;
    margin-bottom: 20px;
    margin-right: 30.1rem;
}
</style>