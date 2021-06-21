import React, {useEffect} from 'react'
import { getAuction } from '../utils/request';


const holandAuction = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getAuction()
    .then((data) => {
      setData(data.data);
      console.log(data.data);
    })
    
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default holandAuction

