import { ethers } from "hardhat"
import { useEffect } from "react"
import { useState } from "react"

const App = () => {
  const [state,setState]=useState({
    provider:null,
    signer:null,
    contract:null,
  })

  useEffect(()=>{
    const template = async()=>{
      const contractAddress="";
      const contractABI="";

      //Connect ot metamask , for transactions on Goerli test net , Metamask consisys of infura api whoch actually help in connecting to blockhain
      const {ethereum}=window; //fetch the ethereum instance provided by metamask from the window
      const account = await ethereum.request({
        method:"eth_requestAccounts" //automatically opens metamsk wallet when user visits the site
        //metamsk is popped to connec to it
      })

      const provider = new ethers.providers.Web3Provider(ethereum); //helps in connecting to blockchain , read the blockahin
      const signer = provider.getSigner(); //a signer is required to do transactions to change state of Blockahin , write on the blockcahin

      const contract = new ethers.Contract( //create a instance of the smart contract to talk to the blockahin
        contractAddress,
        contractABI,
        signer //required to do all sorts of tranactions on the blockchain
      )



    }
    template();
  },[])


  return (
    <div>

    </div>
  )
}

export default App