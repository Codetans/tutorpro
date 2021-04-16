import React, { useState, useEffect } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export function VHelp({message}) {
    return <p className="help">{message}</p>
}

function CreateQuizForm(props) {

    const [isOpen, setIsOpen] = useState(false);

    let toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
        console.log(props.questions)
    })

    let saveQuestion = () => {
        //Assessment.java model --- assessment object
            // contains list of questions

            //assessmentID -- assigned by buisness logic
            //description  -- input by user
            //name         -- input by user          
            //photo_name   -- assigned by buisness logic
            //studentid    -- 
            //subject      -- input by user

            //Assessment_to_questions
                //assessment_to_quetionid
                //assessmentid -- the assessmentid above
                //questionid -- the id of the question added to this assessment
    }

    return (
    <>
        <h1>Creating a new quiz</h1>
        <div>
            <div>
                <label htmlFor='name'>Assessment Name</label>
                <input type='text' name='name'/>
            </div>
            <div>
                <label htmlFor='subject'>Subject</label>
                <input type='text' name='subject'/>
            </div>
            <div>
                <label htmlFor='description'>Assessment Description</label>
                <input type='text' name='description'/>
            </div>
        </div>
        <div>
            <Collapse isOpen ={!isOpen}>
                <p>Question 1</p>
                <div id='wrapper'>
                    <select>
                    {
                        props.questions.map((question, index) => {
                            return(<option key={index} value={question.questionid}>{question.question}</option>)
                        })
                    }
                    </select>
                </div>
                <p>Question 2</p>
                <div id='wrapper'>
                    <select>
                    {
                        props.questions.map((question, index) => {
                            return(<option key={index} value={question.questionid}>{question.question}</option>)
                        })
                    }
                    </select>
                </div>
                <p>Question 3</p>
                <div id='wrapper'>
                    <select>
                    {
                        props.questions.map((question, index) => {
                            return(<option key={index} value={question.questionid}>{question.question}</option>)
                        })
                    }
                    </select>
                </div>
                <p>Question 4</p>
                <div id='wrapper'>
                    <select>
                    {
                        props.questions.map((question, index) => {
                            return(<option key={index} value={question.questionid}>{question.question}</option>)
                        })
                    }
                    </select>
                </div>
                <p>Question 5</p>
                <div id='wrapper'>
                    <select>
                    {
                        props.questions.map((question, index) => {
                            return(<option key={index} value={question.questionid}>{question.question}</option>)
                        })
                    }
                    </select>
                </div>
                {/*<button onClick={saveQuestion}>add question to quiz</button>*/}
                {/*<button onClick={createQuiz}>create quiz</button>*/}
            </Collapse>
            <label htmlFor='addQuestion'></label>
            <Button onClick={toggle}>Save Quiz</Button>
        </div>
    </>
    );
}

export default CreateQuizForm;