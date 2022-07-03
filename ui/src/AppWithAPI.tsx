import "./App.css";
import LoginWithAPI from "./components/LoginWithAPI";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <h1>Auth0 API</h1>
      <LoginWithAPI />
      <LogoutButton />

      <br />
      <br />
      <Profile />
    </div>
  );
}

export default App;
