import React, { useEffect, useState } from 'react'

const Memos = ({state}) => {
  const [memos,setMemos] = useState([]);
  const {contract} = state;
  useEffect(()=>{
    const memmsg = async()=>{
      const memos = await contract.getMemos();
      setMemos(memos);
    }
    contract && memmsg();
  },[contract])


  return (
    <div>
      {memos.map((mem)=>{
        return(
          <p>{mem.message}</p>
          <p>{mem.name}</p>
          <p>{mem.timestamp}</p>
          <p>{mem.from}</p>
        )
      })}

    </div>
  )
}

export default Memos