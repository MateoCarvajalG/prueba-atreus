import axios from "axios";

const KEY = "ba417ff3a1a446de9b7207b0e8f1ceaf";

// https://api.atreus.auction/api/2.4/auctions/5cc18be54d4d412bb9e0209b9d6aa4f0?acc_token=ba417ff3a1a446de9b7207b0e8f1ceaf

const instanceGet = axios.create({
  baseURL: "https://api.atreus.auction/api/2.4/auctions/",
});
const instancePost = axios.create({
  baseURL: "api.atreus.auction/api/2.4/auctions/",
});


export const getAuctions = async (auction_id) => {
  try {
    
    const data = await instanceGet.get(`${auction_id}?acc_token=${KEY}`);
    return data;
  } catch (error) {
    if (error) {
    }
  }
};

export const addAuction = async (request,auction_id)=> {
  
  try {
     const data = await instancePost.post(
      `${auction_id}`, request
     );
     return data;
  } catch (error) {
     if (error) {
     }
  }
}
