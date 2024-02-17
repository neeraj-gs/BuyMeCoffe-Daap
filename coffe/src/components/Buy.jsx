import React from 'react'

const Buy = ({state}) => {

  const buy = async(e)=>{
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

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