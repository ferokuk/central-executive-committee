
<template>
    
</template>
<script>
</script>
<style>
=======
<template>
    <h1> This is your profile.</h1>
    <div class="profile-content">
      <div class="name">
      Name: <strong>{{name}}</strong>
      </div>
    <div class="address">
      Address: {{address}}
      </div>
    Status:
    <span class="status" :style="{color:status ==='Elder'?'red':'green'}">
       {{status}}
    </span>
   </div>
  <div v-if="status==='Elder'">
    <ElderProfileView :address="address"></ElderProfileView>
  </div>
  <div v-else>
    <MemberProfileView :address="address"></MemberProfileView>
  </div>
</template>
<script>
import ContractFunc from '@/contractWeb3'
import w3 from '@/connectWeb3'
import ElderProfileView from './ElderProfileView.vue'
import MemberProfileView from './MemberProfileView.vue'
export default {
  props: {
    name: String,
    address: String,
    status: String
  },
  data () {
    return {
       web3: null,
       contract: null
    }
  },
  async mounted (){
    this.web3 = w3()
    this.contract = await ContractFunc
  },
  methods:{
  },
  components:{
    ElderProfileView,
    MemberProfileView
}
}
</script>
<style scoped>
.profile-content{
    margin:100px;
    margin-top:3rem;
    font-size:2rem;
    background: beige;
    
}
</style>
