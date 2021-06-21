import logo from "./logo.svg";
import "./App.css";
import { getAuctions } from "./utils/english_auction";
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    getAuctions().then((data) => {
      console.log(data);
    });
  }, []);

  return <div className="App"></div>;
}

export default App;
