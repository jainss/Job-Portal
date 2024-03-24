import React, { useEffect, useState } from 'react'

export default function Openings() {
  const [data, setData] = useState([2,3,4,5]); 
  useEffect(()=>{

  }, []);

  return (
    <>
     {
      data.map((e)=>
        {e}
      )
     }
    </>
  )
}
