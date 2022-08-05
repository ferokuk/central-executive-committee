<template>
    <div class="vote-input">
        <input type="text" class="vote-name" v-model="name" @change="nameChangeHandler" placeholder="Enter the name of the vote">
        <button class="send-vote" @click="membersVote">Vote</button>
    </div>
    <CheckVotes></CheckVotes>
</template>
<script>
import ContractFunc from '@/contractWeb3'
import w3 from '@/connectWeb3'
import CheckVotes from './CheckVotes.vue'
export default {
    props: {
        address: String
    },
    data() {
        return {
            web3: null,
            contract: null,
            name: null
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
        async membersVote() {
            if(this.name === null){
                alert("Please, enter a valid name!")
                return
            }
            try{
            await this.contract.methods
            .membersVote(this.name)
            .send({from:this.web3.eth.defaultAccount,gas:3000000})
            .then(value => this.eventChecker(value))
            }catch(error){
                alert(error)
                return
            }
        },
        eventChecker (_receipt) {
            if(_receipt.events.VoteAccepted == undefined){
                this.eventAlert(undefined,undefined)
                return
            }
            if(_receipt.events.VoteAccepted.returnValues.result === "Vote has been successfully accepted!"){
                this.eventAlert(_receipt.events.VoteAccepted.returnValues.name,_receipt.events.VoteAccepted.returnValues.result)
                return
             }
        },
        eventAlert(_name,_result){
            alert("Your vote has been counted")
            if(_name !== undefined && _result !== undefined){
              alert(_name + " " +_result)
            }

        }
    },
    components:{CheckVotes}
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
</style>