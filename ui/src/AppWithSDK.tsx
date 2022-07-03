import { useEffect } from "react";
import auth0 from "auth0-js";
import "./App.css";
import LoginWithAPI from "./components/LoginWithAPI";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  useEffect(() => {
    const webAuth = new auth0.WebAuth({
      domain: process.env.REACT_APP_AUTH0_DOMAIN as string,
      clientID: process.env.REACT_APP_AUTH0_CLIENT_ID as string,
    });

    webAuth.authorize({
      redirectUri: "https://f80d-179-125-208-242.sa.ngrok.io/",
      connection: "google",
      domain: process.env.REACT_APP_AUTH0_DOMAIN as string,
      responseType: "token",
    }); // ERROR: 302, maybe because of visit page NGROK the browser does not redirect automatically
  }, []);

  return (
    <div className="App">
      <h1>Auth0 SDK</h1>
      <LoginWithAPI />
      <LogoutButton />

      <br />
      <br />
      <Profile />
    </div>
  );
}

export default App;
