import React, { useState } from 'react';
import Header from './Header';
import SideNav from './SideNav';
import MainContentPanel from './MainContentPanel';
import { Container, Row, Col } from 'reactstrap';

const DashBoard = (props) => {
  const [mode, setMode] = useState('');

  function changeMode(selectedMode) {
    setMode(selectedMode);
  }

  return (
      <>
         {/* see if we can move this out to app.js*/}
        <Header logOut={props.logOut}/>
        <div className="dashBoard">
            <SideNav changeMode={changeMode} userType={props.userType}/>
            <MainContentPanel userName={props.userName} userEmail={props.userEmail} mode={mode} changeMode={changeMode}/>
        </div>
    </>
  )
}

export default DashBoard