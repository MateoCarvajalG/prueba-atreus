import React, { useState, useEffect } from "react";

import { getAuctions, addAuction } from "../utils/request";

const HolandAuction = () => {
  const auction_id = "76dec0a274db4374a641e6ea4380fb22";
  const request = {
    "data": {
      "title": "casings for state awards",
      "value": {
        "amount": 500
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
      // setData(response.data.data);
      console.log('getAuction',response);
    });
    addAuction(request, auction_id).then((response) => {
      console.log('addingAuction: ',response);
    });
  }, []);
  return (
  <div>
    <h1>Holand Auction</h1>
    </div>
    );
};

export default HolandAuction;
