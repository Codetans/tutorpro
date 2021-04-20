import React, { useState, useEffect } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import axios from 'axios';
import Autocomplete from 'react-autocomplete';
import "../stylesheets/assignQuiz.css"

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
    var [searchedStudent, setSearchedStudent] = useState({name: '', id: ''});
    var [searchedAssessment, setSearchedAssessment] = useState({name: '', assessmentID: ''});

    let renderItems = (data, value) => {
        return (
            data.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
    }

    let saveAssignment = (e) => {
        e.preventDefault();
        console.log(searchedAssessment);
        if(searchedStudent.id != undefined && searchedAssessment.id != undefined) {
            console.log('student name is', searchedStudent.name)
            console.log('student id is', searchedStudent.id.id)
            console.log('assessment name is', searchedAssessment.name)
            console.log('assessment id is', searchedAssessment.id.assessmentID)
        }

    }

    return (
        <Jumbotron style={styles.Jumbotron}>
            <h1 className="display-5">Assign quizzes to users</h1>
            <div>
                <form onSubmit={saveAssignment}>
                    <div className="row">
                        <div className="col-md-3">
                            <p>Search for a user</p>
                            <Autocomplete
                                value={searchedStudent.name}
                                items={props.allStudents}
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
                                items={props.allAssessments}
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
            </div>
        </Jumbotron>
    ) 
}

export default AssignQuiz;