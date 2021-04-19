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

    const [searchedStudent, setSearchedStudent] = useState("");
    const [matchedStudent, setMatchedStudent] = useState([]);

    const findMatches = (searchedStudent, studentData) => {
        return studentData.filter(user => {
          const regex = new RegExp(searchedStudent);
          return user.name.match(regex);
        });
      };

      const handleChange = e => {
        setSearchedStudent(e.target.value);
        setMatchedStudent(findMatches(searchedStudent, studentData));
        //displayMatches();
      };

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
            <div>
            <FormInput
                type="text"
                placeholder="type student name here"
                onChange={handleChange}
                />
            </div>
            <div>
                {matchedStudent.map((user, i) => (
                <input
                    userName={user.userName}
                    key={i}
                    onClick={() => }
                />
        ))}
            </div>
        </Jumbotron>
    ) 
}

export default AssignQuiz;