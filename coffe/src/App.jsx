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
    }
    template();
  },[])


  return (
    <div>

    </div>
  )
}

export default App