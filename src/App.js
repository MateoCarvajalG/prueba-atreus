import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import HolandAuction from "./components/holandAuction";
import EnglishAuction from "./components/englishAuction";

function App() {
  return (
    <div className="App">
      <h1>hola mundo</h1>
      {/* <HolandAuction /> */}
      <EnglishAuction />
    </div>
  );
}

export default App;
