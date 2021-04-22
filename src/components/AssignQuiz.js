import React, { useState, useEffect } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import axios from 'axios';
import Autocomplete from 'react-autocomplete';
import "../stylesheets/assignQuiz.css";
import URL from '../url.js'

const styles = {
    container: {
        backgroundColor: 'rgb(220,220,220)',
        height: '95%'
    },
    Jumbotron: {
        height: '100%'
    }
  }

function AssignQuiz() {
    var [searchedStudent, setSearchedStudent] = useState({name: '', id: ''});
    var [searchedAssessment, setSearchedAssessment] = useState({name: '', assessmentID: ''});
    const [allStudents, setAllStudents] = useState([]);
    const [allAssessments, setAllAssessments] = useState([]);


    useEffect(() => {
        async function fetchData() {
            await axios.get(`${URL}user/getAllStudents`)
            .then(students => {
                setAllStudents(students.data)
            })

            await axios.get(`${URL}assessment/getAllAssessments`)
            .then(assessments => {
                setAllAssessments(assessments.data);
                console.log(assessments.data);
            })
		}
		fetchData();
    }, [])

    let renderItems = (data, value) => {
        return (
            data.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
    }

    let saveAssignment = (e) => {
        e.preventDefault();
        if(searchedStudent.id != undefined && searchedAssessment.id != undefined) {
            axios.post(`${URL}assessment/assignQuiz`,{
                assessmentID: searchedAssessment.id.assessmentID,
                studentID: searchedStudent.id.id
            })
            .then(response => {
                if(response.data === 'Student is already assigned to this quiz') {
                    alert('Student is already assigned to this quiz');
                } else if (response.data === 'There was a problem saving the quiz assignment') {
                    alert('There was a problem saving the quiz assignment. Please try again');
                } else if (response.data === 'successfully saved quiz assignment') {
                    alert(`User '${searchedStudent.name}' was successfully assigned to quiz '${searchedAssessment.name}'`);
                }
            })
        }
    }

    return (
        <Jumbotron style={styles.Jumbotron}>
            <h1 className="display-5">Assign quizzes to users</h1>
            <div>
                {(allAssessments.length > 0 && allStudents.length > 0) ? 
                <form onSubmit={saveAssignment}>
                    <div className="row">
                        <div className="col-md-3">
                            <p>Search for a user</p>
                            <Autocomplete
                                value={searchedStudent.name}
                                items={allStudents}
                                getItemValue={item => item.name}
                                shouldItemRender={renderItems}
                                renderMenu={item => (
                                    <div className="dropdown">
                                        {item}
                                    </div>
                                )}
                                renderItem={(item, isHighlighted) => 
                                    <div key={item.id} className={`item ${isHighlighted ? 'selected-item' : ''}`}>
                                        {item.name}
                                    </div>}
                                onChange={(event, name, id) => setSearchedStudent({name, id})}
                                onSelect={(name, id) => setSearchedStudent({name, id})}
                                required
                                >
                            </Autocomplete>
                        </div>
                        <div className="col-md-3">
                            <p>Search for a quiz</p>
                            <Autocomplete
                                value={searchedAssessment.name}
                                items={allAssessments}
                                getItemValue={item => item.name}
                                shouldItemRender={renderItems}
                                renderMenu={item => (
                                    <div className="dropdown">
                                        {item}
                                    </div>
                                )}
                                renderItem={(item, isHighlighted) => 
                                    <div key={item.assessmentID} className={`item ${isHighlighted ? 'selected-item' : ''}`}>
                                        {item.name}
                                    </div>}
                                onChange={(event, name, id) => setSearchedAssessment({name, id})}
                                onSelect={(name, id) => setSearchedAssessment({name, id})}
                                required
                                >
                            </Autocomplete>
                        </div>
                        <div className="col-md-3">
                            <label htmlFor='addQuestion'></label>
                            <Button type="submit" className='alignButton'>Assign Assessment</Button>
                        </div>
                    </div>
                </form>
                : <div>loading...</div>}
            </div>
        </Jumbotron>
    ) 
}

export default AssignQuiz;