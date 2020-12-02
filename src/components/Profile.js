import React from 'react'
import { Jumbotron } from 'reactstrap';

const styles = {
    container: {
        backgroundColor: 'rgb(220,220,220)',
        height: '95%'
    },
    Jumbotron: {
        height: '100%'
    }
  }

const Profile = (props) => {
    return (
        <Jumbotron style={styles.Jumbotron}>
            <h1 className="display-5">Profile Page</h1>
            <p className="lead">Name: {props.userName}</p>
            <p className="lead">Email: {props.userEmail}</p>
            <hr className="my-2" />
            <p className="lead">
            </p>
        </Jumbotron>
    )
}

export default Profile;