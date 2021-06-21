import React, { useState, useEffect } from "react";

import { getAuctions, addAuction } from "../utils/request";

const EnglishAuction = () => {
  const [data, setData] = useState([]);
  const auction_id = "5cc18be54d4d412bb9e0209b9d6aa4f0";
  const request ={
    "data": {
      "title": "mateo",
      "value": {
        "amount": 2500
      },
      "minimalStep": {
        "amount": 35
      },
      "items": [
        {
          "description": "casings for state awards",
          "quantity": 5
        }
      ],
      "tenderPeriod": {}
    }
  }
  useEffect(() => {
    getAuctions(auction_id).then((response) => {
      console.log(response)
    });
    addAuction(request,auction_id).then((response) => {
      console.log(response);
    });
    
  }, []);
  return (
    <div>
      <h2>English Auction</h2>
      {data.auctionID}
    </div>
  );
};

export default EnglishAuction;
