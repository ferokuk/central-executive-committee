<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import w3 from '@/connectWeb3'
import {ABI,address} from '@/Contract.js'

const web3 = w3();
<<<<<<< Updated upstream
const getContract = new Promise(function (resolve){
=======
const getContract = new Promise(function (resolve,reject){
>>>>>>> Stashed changes
    let contract = new web3.eth.Contract(ABI,address)
    console.log(contract)
    resolve(contract)
})
<<<<<<< Updated upstream

export default getContract;

=======
export default getContract;
>>>>>>> Stashed changes
