import "./App.css";
import React, { useState } from "react";

import HolandAuction from "./components/holandAuction";
import EnglishAuction from "./components/englishAuction";
import { GoogleLogin } from "react-google-login";

function App() {
  const [google, setGoogle] = useState(null);
  const respuestaGoogle = (respuesta) => {
    console.log(respuesta);
    setGoogle(respuesta.profileObj);
  };
  return (
    <div className="App">
      {google != null ? (
        <div>
          <HolandAuction />
          <EnglishAuction />
        </div>
      ) : (
        <div>
          <br />
          <br />
          <GoogleLogin
            clientId="460431972981-rrqdmbuan93ipvbk7f68hv8b13bh9u51.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={respuestaGoogle}
            onFailure={respuestaGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      )}
    </div>
  );
}

export default App;
