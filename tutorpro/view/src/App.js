import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.scss';
import Dashboard from './components/Dashboard';
import axios from 'axios';
import LoginRegistration from './components/LoginRegister';
import { useEffect } from 'react';

require.context('./stylesheets/', true, /\.(css|scss)$/i)

export default function App() { 
  const [userName, setUserName] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function createUser(newUserName, newEmail, newPassword) {
    setNewUserName(newUserName);
    setNewEmail(newEmail)
    setNewPassword(newPassword);

    axios.post('http://localhost:8080/user/create', {
        name: newUserName,
        email: newEmail,
        password: newPassword
    })
    .then(res => {
        console.log(res);
        if(res.data === "Saved") {
            alert("User created successfully");
        }
    })
  }

  function authenticateUser(authUserName, authPassword) {
    console.log('the login button was clicked. Username is ' + authUserName)
    console.log('the login button was clicked. Password is ' + authPassword)
  
    axios.post('http://localhost:8080/user/authenticateUser', {
        email: authUserName,
        password: authPassword
    })
    .then(res => {
        console.log(res.data);
        console.log("user name is ", authUserName);
        if (res.data == authUserName) {
            setUserName(authUserName);
            setIsAuthenticated(true);
            localStorage.setItem("token", "t");
        } else {
            alert("Bad Username or password!");
        }
    })
  }

  function logOut() {
    console.log("inside the logOut function");
    setIsAuthenticated(false);
  }

  return (
    <div className="App">
      {isAuthenticated ? <Dashboard userName={userName} logOut={logOut}/> : <LoginRegistration childAuthenticateUser={authenticateUser} childCreateUser={createUser}/>}
    </div>
  );
}
