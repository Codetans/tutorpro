import React, { useState, useEffect } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export function VHelp({message}) {
    return <p className="help">{message}</p>
}

function CreateQuizFormSaved(props) {

    return (
    <>
        <h1 className="create-quiz-page-title">Successfully Saved Quiz: {props.newQuizName}</h1>
        <div>
            <form autoComplete="off">
                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor='name'>Assessment Name</label>
                    </div>
                    <div className="col-md-2">
                        <input type='text' name='name' className="create-quiz-fields disabled-field" value={props.newQuizName} disabled/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor='description'>Assessment Description</label>
                    </div>
                    <div className="col-md-2">
                        <input type='text' name='description' className="create-quiz-fields disabled-field" value={props.newQuizDescription} disabled/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor='subject'>Subject</label>
                    </div>
                    <div className="col-md-2">
                        <select className="create-quiz-fields disabled-field" disabled>
                            <option value="math">{props.newQuizSubject}</option>
                        </select>
                    </div>
                </div>
                <label htmlFor='addQuiz'></label>
                <Button onClick={() => {props.changeMode("createquiz")}}>Create Another Quiz</Button>
                </form>
        </div>
    </>
    );
}

export default CreateQuizFormSaved;