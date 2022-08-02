<template>
    <div>
        <VoteCreationForm :address="address"></VoteCreationForm>
    </div>
    <div class="vote-input">
        <input class="vote-name" type="text" placeholder="Enter the name of the vote" v-model="name" @input="nameChangeHandler">
        <button class="send-vote" @click="voteForProposed">Send vote</button>
    </div>
</template>
<script>
import ContractFunc from '@/contractWeb3'
import w3 from '@/connectWeb3'
import VoteCreationForm from './VoteCreationForm.vue'
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
    },
    methods: {
        nameChangeHandler (event) {
            this.name = event.target.value
        },
        async voteForProposed() {
            await this.contract.methods.eldersVoteForProposedVote(this.name).send({from:this.address,gas:3000000}).then(value =>this.eventChecker(value))
        },
        eventChecker (_receipt) {
            if(_receipt.events.VoteApproved.returnValues.result){
                alert(_receipt.events.VoteApproved.returnValues.result)
            }
            else{
                alert("Your vote has been counted!")
            }
        }
    },

    components: { VoteCreationForm }
}
</script>
<style scoped>
.vote-name{
    background-color: beige;
    font-size:1.5rem;
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