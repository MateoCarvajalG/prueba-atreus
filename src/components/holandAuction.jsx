import React, { useState, useEffect } from 'react'


import { getAuctions } from '../utils/request';


const HolandAuction = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getAuctions()
    .then((data) => {
      setData(data);
      console.log(data);
    })
    
  }, [])
  return (
    <div>
      {/* <h2>este es holand auction</h2>
      {data} */}
    </div>
  )
}

export default HolandAuction

