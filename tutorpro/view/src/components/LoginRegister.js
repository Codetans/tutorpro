import React, { useState } from 'react';
import {Tabs, Tab, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css'

const LoginRegistration = (props) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [newUserName, setNewUserName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    function handleAuthenticateSubmit(e) {
        e.preventDefault();
        props.childAuthenticateUser(userName, password);
    }

    function handleCreateSubmit(e) {
        e.preventDefault();
        props.childCreateUser(newUserName, newEmail, newPassword);
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <Tabs defaultIndex={0}>
                    <TabList>
                        <Tab><b>Login</b></Tab>
                        <Tab><b>Create User Account</b></Tab>
                    </TabList>
                    <TabPanel>
                        <form>
                            <div className="form-group">
                                <br />
                                <label>Email address</label>
                                <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={(e) => setUserName(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button onClick={handleAuthenticateSubmit} className="btn btn-primary btn-block">Submit</button>
                        </form>
                    </TabPanel>
                    <TabPanel>
                        <form>
                            <div className="form-group">
                                <br />
                                <label>First name</label>
                                <input type="text" className="form-control" name="name" placeholder="Enter Name" onChange={(e) => setNewUserName(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Email address</label>
                                <input type="email" className="form-control" name="email" placeholder="Enter email" onChange={(e) => setNewEmail(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Enter password" onChange={(e) => setNewPassword(e.target.value)} />
                            </div>

                            <button onClick={handleCreateSubmit} className="btn btn-primary btn-block">Sign Up</button>
                        </form>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
}

export default LoginRegistration