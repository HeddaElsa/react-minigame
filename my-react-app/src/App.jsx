import Registration from "./Components/Registration.jsx";
import Login from "./Components/Login.jsx";
import API from "./API.jsx";
import React from 'react';
import {useState} from 'react';

function App() {

  const [currentScreen, setCurrentScreen] = useState("Registration");
  const storedPassword = localStorage.getItem("password");
  const storedUsername = localStorage.getItem("username");

  const handleRegistration = () => {
    setCurrentScreen("Login");
  };

  const handleLogin = (username, password) => {
    if (username === storedUsername && password === storedPassword) {
      setCurrentScreen("The-game");
    } else {
      alert("Username or password is not correct");
    }
  };

  return (
  <div>
    {currentScreen === "Registration" && <Registration onRegistration={handleRegistration} />}
    {currentScreen === "Login" && <Login onLogin={handleLogin} />}
    {currentScreen === "The-game" && <API />}
  </div>
  )
}

export default App
