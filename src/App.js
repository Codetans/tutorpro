import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.scss';
import Dashboard from './components/Dashboard';
import axios from 'axios';
import LoginRegistration from './components/LoginRegister';
import { useEffect } from 'react';
import Header from "./components/Header";

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
  const [badUserNameOrPassword, setBadUserNameOrPassword] = useState(false);
  const [userAlreadyExists, setUserAlreadyExists] = useState(false);
  const [userCreatedSuccessfully, setUserCreatedSuccessfully] = useState(false);

  useEffect(() => {
    if(localStorage.getItem("token") === "t") {
      setIsAuthenticated(true);
      setUserName(localStorage.getItem("user"));
      setUserType(localStorage.getItem("type"));
      setUserEmail(localStorage.getItem("email"));
    }
  }, [userName, userType]);

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
        if(res.data === "User created successfully") {
          setUserAlreadyExists(false);
          setUserCreatedSuccessfully(true);
        } else if(res.data === "User already exists") {
          setUserCreatedSuccessfully(false);
          setUserAlreadyExists(true);
        }
    })
  }

  function authenticateUser(authUseremail, authPassword) {  
    axios.post('http://localhost:8080/user/authenticateUser', {
        email: authUseremail,
        password: authPassword
    })
    .then(res => {
        if (res.data.userEmail === authUseremail) {
            setBadUserNameOrPassword(false);
            setUserEmail(authUseremail);
            setUserName(res.data.userName);
            setUserType(res.data.userType);
            setIsAuthenticated(true);
            localStorage.setItem("token", "t");
            localStorage.setItem("user", res.data.userName);
            localStorage.setItem("type", res.data.userType);
            localStorage.setItem("email", res.data.userEmail);
        } else {
            setBadUserNameOrPassword(true);
            setUserCreatedSuccessfully(false);
            setUserAlreadyExists(false);
        }
    })
  }

  function logOut() {
    console.log("inside the logOut function");
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  }

  return (
    <div className="mainContainer">
      {isAuthenticated ? <Dashboard userName={userName} userEmail={userEmail} userType={userType} logOut={logOut}/> : <LoginRegistration authenticateUser={authenticateUser} createUser={createUser} badUserNameOrPassword={badUserNameOrPassword} userAlreadyExists={userAlreadyExists} userCreatedSuccessfully={userCreatedSuccessfully} />}
    </div>
  );
}
