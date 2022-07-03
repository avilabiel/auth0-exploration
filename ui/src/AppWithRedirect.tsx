import { Auth0Provider } from "@auth0/auth0-react";
import "./App.css";
import Login from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
      redirectUri={window.location.origin}
    >
      <div className="App">
        <h1>Auth0</h1>
        <Login />
        <LogoutButton />

        <br />
        <br />
        <Profile />
      </div>
    </Auth0Provider>
  );
}

export default App;
