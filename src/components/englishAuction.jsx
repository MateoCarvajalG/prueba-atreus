import React, { useState, useEffect } from 'react'


import { getAuctions } from '../utils/request';


const EnglishAuction = () => {

  const [data, setData] = useState([])
  const auction_id = "5cc18be54d4d412bb9e0209b9d6aa4f0";


  useEffect(() => {
    getAuctions(auction_id)
    .then((data) => {
      setData(data.data.data);
      console.log(data.data.data);
    })
    
  }, [])
  return (
    <div>
            <h2>este es english auction</h2>
            {data.auctionID}
    </div>
  )
}

export default EnglishAuction


