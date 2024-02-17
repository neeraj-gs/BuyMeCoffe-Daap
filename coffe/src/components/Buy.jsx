import { ethers } from 'hardhat';
import React from 'react'

const Buy = ({state}) => {

  const buy = async(e)=>{
    e.preventDefault();
    const {contract} = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    const amount =  {value:ethers.utils.parseEther(0.001)} //smart contracts accep in wei so we need to convert from weo to ehter

    const transaction = await contract.buy(
      name,
      message,
      amount
    )

    await transaction.wait();
    //then we can perform anything after submitting it

  }


  return (
    <form onSubmit={buy}>
      <input id='name' type="text" />
      <input id='message' type="text" />
      <button>Pay</button>
    </form>
  )
}

export default Buy