<template>
    <div class="votes">
      <div class="votes-text"> Check accepted votes </div>
      <br>
      <input placeholder="Enter the name of vote" type="text" v-model="nameAccepted" @change="nameAcceptedChangeHandler">
      <button @click="checkAcceptedVotes">Check</button>
    </div>
    <div class="votes">
    <div class="votes-text"> Check approved votes </div>
      <br>
      <input placeholder="Enter the name of vote" type="text" v-model="nameApproved" @change="namePendingChangeHandler">
      <button @click="checkApprovedVotes">Check</button>
    </div>
    <br>
</template>
<script>
import ContractFunc from '@/contractWeb3'
export default{
    async mounted(){
      this.contract = await ContractFunc
    },
    data () {
      return {
        nameAccepted: null,
        nameApproved: null,
        contract: null,
      }
    },
    methods:{
      nameAcceptedChangeHandler(event) {
        this.nameAccepted = event.target.value
      },
      namePendingChangeHandler(event) {
        this.nameApproved = event.target.value
      },
      async checkAcceptedVotes () {
        if(this.name === null){
            alert("Please, enter a valid name!")
            return
        }
        this.contract.methods
        .acceptedVotes(this.nameAccepted)
        .call()
        .then(value => this.dataParser(value.name,value.information,value.votesNeeded,value.votesAmount,value.percentForApproval))
      },
      async checkApprovedVotes () {
        if(this.name === null){
            alert("Please, enter a valid name!")
            return
        }
        this.contract.methods
        .approvedVotes(this.nameApproved)
        .call()
        .then(value => this.dataParser(value.name,value.information,value.votesNeeded,value.votesAmount,value.percentForApproval))
      },
      dataParser(name,info,vN,vA,pFA){
        if(name === '' && info === '' && vA == 0 && vN == 0){
            alert("This vote doesn't exist!")
            return
        }
        this.dataAlert(name,info,vN,vA,pFA)
      },
      dataAlert(name,info,vN,vA,pFA){
        alert(
        `
        name: ${name}
        info: ${info}
        votes needed: ${vN}
        votes amount: ${vA}
        percent for approval: ${pFA}`)
      }
    }
  }

</script>
<style scoped>
.votes{
    margin-top:20px;
}
input{
    background-color: beige;
    font-size:1.7rem;
    height:75px;
    width:400px;
    margin-right: 30px;
}
button{
    font-size: 1.5rem;
    background-color: beige;
    width:156px;
    height:79px;
}
button:hover{
    cursor: pointer;
    background-color: blanchedalmond;
}
.votes-text{
    font-size:1.5rem;
}
</style>