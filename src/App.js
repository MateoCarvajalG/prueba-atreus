import "./App.css";
import React, { useEffect } from "react";
import HolandAuction from "./components/holandAuction";
import EnglishAuction from "./components/englishAuction";
import { getAuctions } from "./utils/request";

function App() {
  return (
    <div className="App">
      <HolandAuction />
      <EnglishAuction />
    </div>
  );
}

export default App;
