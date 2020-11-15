import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.scss';
import Dashboard from './components/Dashboard';
import axios from 'axios';
import LoginRegistration from './components/LoginRegister';
import { useEffect } from 'react';
import SideNav from './components/SideNav';

require.context('./stylesheets/', true, /\.(css|scss)$/i)

export default function App() { 
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userType, setUserType] = useState('');
  const [newUserName, setNewUserName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newUserType, setNewUserType] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function createUser(newUserName, newEmail, newPassword, newUserType) {
    setNewUserName(newUserName);
    setNewEmail(newEmail)
    setNewPassword(newPassword);
    setNewUserType(newUserType);

    axios.post('http://localhost:8080/user/create', {
        name: newUserName,
        email: newEmail,
        password: newPassword,
        userType: newUserType
    })
    .then(res => {
        console.log(res);
        if(res.data === "Saved") {
            alert("User created successfully");
        }
    })
  }

  function authenticateUser(authUseremail, authPassword) {
    console.log('the login button was clicked. Username is ' + authUseremail)
    console.log('the login button was clicked. Password is ' + authPassword)
  
    axios.post('http://localhost:8080/user/authenticateUser', {
        email: authUseremail,
        password: authPassword
    })
    .then(res => {
        console.log(res.data);
        console.log("user name is ", authUseremail);
        if (res.data.userEmail === authUseremail) {
            setUserEmail(authUseremail);
            setUserName(res.data.userName);
            setUserType(res.data.userType);
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
      {isAuthenticated ? <Dashboard userName={userName} logOut={logOut}/> : <LoginRegistration authenticateUser={authenticateUser} createUser={createUser}/>}
      <SideNav userType={userType} />
    </div>
  );
}
