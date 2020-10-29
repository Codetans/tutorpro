import React, { Component } from 'react';
import Login from './Login';
import Register from './Register';
import {Tabs, Tab, TabList, TabPanel} from 'react-tabs';
import { Redirect } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css'

export default class MultipleTabs extends Component {

    render() {
        if(localStorage.getItem("token")) {
            return <Redirect to="/Dashboard" />
        }
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <Tabs defaultIndex={0}>
                        <TabList>
                            <Tab><b>Login</b></Tab>
                            <Tab><b>Create User Account</b></Tab>
                        </TabList>
                        <TabPanel><Login /></TabPanel>
                        <TabPanel><Register /></TabPanel>
                    </Tabs>
                </div>
            </div>
        );
    }
}