import w3 from '@/connectWeb3'
import {address,ABI} from '@/Contract.js'

const web3 = w3();
const getContract = new Promise(function (resolve){
    let contract = new web3.eth.Contract(ABI,address)
    console.log(contract)
    resolve(contract)
})
export default getContract;
