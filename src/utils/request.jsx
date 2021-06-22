import axios from "axios";

const token = "ba417ff3a1a446de9b7207b0e8f1ceaf";

// const config = {
  // headers: { Authorization: `Bearer ${token}` }
// };

// https://api.atreus.auction/api/2.4/auctions/5cc18be54d4d412bb9e0209b9d6aa4f0?acc_token=ba417ff3a1a446de9b7207b0e8f1ceaf

const instance = axios.create({
  baseURL: "https://api.atreus.auction/api/2.4/auctions",
});


export const getAuctions = async (auction_id) => {
  try {
    
    const data = await instance.get(`/${auction_id}?acc_token=${token}`);
    return data;
  } catch (error) {
    console.log('Error getting auction');
  }
};

export const addAuction = async (request,auction_id)=> {
  console.log(request);
  
  axios.post("https://api.atreus.auction/api/2.4/auctions", {
  headers: {
    'Authorization': `token ${token}`
  }
}, request)
.then((res) => {
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})
}
