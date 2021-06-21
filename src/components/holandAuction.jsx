import React, { useState, useEffect } from "react";

import { getAuctions, addAuction } from "../utils/request";

const HolandAuction = () => {
  const [data, setData] = useState([]);
  const auction_id = "5cc18be54d4d412bb9e0209b9d6aa4f0";
  const request = {
    "datos": {
      "title": "carcasas para premios estatales",
      "valor": {
        "cantidad": 500
      },
      "minimalStep": {
        "cantidad": 35
      },
      "artículos": [
        {
          "description": "carcasas para premios estatales",
          "cantidad": 5
        }
      ],
      "tenderPeriod": {},
      "provisionMethodType": "información privilegiada"
    }
  }
  useEffect(() => {
    getAuctions(auction_id).then((response) => {
      setData(response);
    });
    addAuction(request, auction_id).then((response) => {
      console.log(response);
    });
  }, []);
  return (
  <div>
    <h1>Holand Auction</h1>
    </div>
    );
};

export default HolandAuction;
