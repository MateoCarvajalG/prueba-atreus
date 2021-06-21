import "./App.css";
import React from "react";
import HolandAuction from "./components/holandAuction";
import EnglishAuction from "./components/englishAuction";

function App() {
  return (
    <div className="App">
      <HolandAuction />
      <EnglishAuction />
    </div>
  );
}

export default App;
