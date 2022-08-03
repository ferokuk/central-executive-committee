import w3 from '@/connectWeb3'
import {ABI,address} from '@/Contract.js'

const web3 = w3();
const getContract = new Promise(function (resolve,reject){
    let contract = new web3.eth.Contract(ABI,address)
    console.log(contract)
    resolve(contract)
})
export default getContract;
