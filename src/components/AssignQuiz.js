import React, { useState, useEffect } from 'react'
import { Jumbotron } from 'reactstrap';
import axios from 'axios';

const styles = {
    container: {
        backgroundColor: 'rgb(220,220,220)',
        height: '95%'
    },
    Jumbotron: {
        height: '100%'
    }
  }

function AssignQuiz(props) {
    useEffect(() => {
        async function fetchData() {
            await axios.get(`http://localhost:8080/user/getAllStudents`)
                .then(response => {
                    console.log(response.data)
                })
        }
        fetchData();
    }, []);

    return (
        <Jumbotron style={styles.Jumbotron}>
            <h1 className="display-5">Assign quizzes to users</h1>
            <p>Here are some resources to help you</p>
            <p className="lead">
            </p>
        </Jumbotron>
    ) 
}

export default AssignQuiz;