import React, { useEffect } from 'react'

import './App.css';
import { getAuction } from './utils/holandAuction/holandAuction';

function App() {
  useEffect(() => {
    getAuction()
    .then((data) => {
      console.log(data);
    })
    
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
