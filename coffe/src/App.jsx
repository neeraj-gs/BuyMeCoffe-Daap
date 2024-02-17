import { ethers } from "hardhat"
import { useEffect } from "react"
import { useState } from "react"
import abi from "./contract/Chai.json"

const App = () => {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null,
  })

  const [account,setAccount] = useState('Not connected');

  useEffect(()=>{
    const template = async()=>{
      const contractAddress=""; //add account address contract after deploying on a network
      const contractABI=abi; //extract from contract.json , from the assets foler

      //Connect ot metamask , for transactions on Goerli test net , Metamask consisys of infura api whoch actually help in connecting to blockhain
      try { //added try cathc block as some times there cannot be a metamsk account
        const {ethereum}=window; //fetch the ethereum instance provided by metamask from the window
      const account = await ethereum.request({
        method:"eth_requestAccounts" //automatically opens metamsk wallet when user visits the site
        //metamsk is popped to connec to it
      })
      setAccount(account); //once account is connected set account

      const provider = new ethers.providers.Web3Provider(ethereum); //helps in connecting to blockchain , read the blockahin
      const signer = provider.getSigner(); //a signer is required to do transactions to change state of Blockahin , write on the blockcahin

      const contract = new ethers.Contract( //create a instance of the smart contract to talk to the blockahin
        contractAddress,
        contractABI,
        signer //required to do all sorts of tranactions on the blockchain
      )
      setState({provider,signer,contract}); //once contract instance is created , we can set the state of the transactions
      } catch (error) {
        console.error(error);
        alert(error);
      }
      

    }
    template();
  },[])


  return (
    <div>

    </div>
  )
}

export default App