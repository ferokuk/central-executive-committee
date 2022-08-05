<template>
    <div>
        <VoteCreationForm></VoteCreationForm>
    </div>
    <div class="vote-input">
        <input class="vote-name" type="text" placeholder="Enter the name of the vote" v-model="name" @input="nameChangeHandler">
        <button class="send-vote" @click="voteForProposed">Send vote</button>
    </div>
    <div>
    <div class="votes-text"> Check proposed votes </div>
      <br>
      <input class="vote-name" placeholder="Enter the name of vote" type="text" v-model="nameProposedVote" @change="nameProposedVoteChangeHandler">
      <button class="send-vote" @click="checkProposedVotes">Check</button>
    </div>
    <CheckVotes></CheckVotes>
</template>
<script>
import ContractFunc from '@/contractWeb3'
import w3 from '@/connectWeb3'
import VoteCreationForm from './VoteCreationForm.vue'
import CheckVotes from './CheckVotes.vue'
export default {
    props: {
        address: String
    },
    data() {
        return {
            web3: null,
            contract: null,
            name: null,
            nameProposedVote: null
        };
    },
    async mounted() {
        this.web3 = w3();
        this.contract = await ContractFunc;
        const accounts = await this.web3.eth.getAccounts()
        await this.web3.eth.personal.unlockAccount(accounts[0],"").then(this.web3.eth.defaultAccount = accounts[0])
    },
    methods: {
        nameChangeHandler (event) {
            this.name = event.target.value
        },
        nameProposedVoteChangeHandler (event) {
            this.nameProposedVote = event.target.value
        },
        async voteForProposed() {
            try{
            await this.contract.methods
            .eldersVoteForProposedVote(this.name)
            .send({from:this.web3.eth.defaultAccount,gas:3000000})
            .then(value =>this.eventChecker(value))
            }catch(error){
                alert(error)
                return
            }
        },
        eventChecker (_receipt) {
            alert("Your vote has been counted!")
            if(_receipt.events.VoteApproved.returnValues.result){
                alert(_receipt.events.VoteApproved.returnValues.result)
            }
        },
        async checkProposedVotes(){
            if(this.nameProposedVote === null){
                alert("Please, enter a valid name!")
                return
            }
            this.contract.methods
            .proposedVotes(this.nameProposedVote)
            .call()
            .then(value => this.dataParser(value.name,value.information,value.votesNeeded,value.votesAmount,value.percentForApproval))
        },
        dataParser(name,info,vN,vA,pFA){
        if(name === '' && info === '' && vA == 0 && vN == 0){
            alert("This vote doesn't exist!")
            return
        }
        alert(
        `
        name: ${name}
        info: ${info}
        votes needed: ${vN}
        votes amount: ${vA}
        percent for approval: ${pFA}`)
      }
    },

    components: { VoteCreationForm,CheckVotes }
}
</script>
<style scoped>
.vote-name{
    background-color: beige;
    font-size:1.7rem;
    height:75px;
    width:400px;
    margin-right: 30px;
}
.send-vote{
    font-size: 1.5rem;
    background-color: beige;
    width:156px;
    height:79px;
}
.send-vote:hover{
    cursor: pointer;
    background-color: blanchedalmond;
}
.vote-input{
    margin-top: 40px;
}
.votes-text{
    margin-top:20px;
    font-size: 1.5rem;
}
</style>