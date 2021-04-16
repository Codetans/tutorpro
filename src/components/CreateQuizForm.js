import React, { useState, useEffect } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import axios from 'axios';

export function VHelp({message}) {
    return <p className="help">{message}</p>
}

function CreateQuizForm(props) {
    var [name, setName] = useState('');
    var [subject, setSubject] = useState('Math');
    var [description, setDescription] = useState('');
    var questions = ["1", "1", "1", "1", "1"]

    useEffect(() => { })

    let saveSelectedQuestion = (questionId, index) => {
        questions[index] = questionId
    }

    let saveQuestion = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(subject)
        console.log(description)
        console.log(questions)
        
        // axios.post('http://localhost:8080/assessment/create', {
        // name: newUserName,
        // subject: subject,
        // description: description,
        // questions: questions
        // })
        // .then(res => {
            
        // })
    }

    return (
    <>
        <h1>Creating a new quiz</h1>
        <div>
            <form autoComplete="off" onSubmit={saveQuestion}>
                <div>
                    <label htmlFor='name'>Assessment Name</label>
                    <input type='text' name='name' onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor='subject'>Subject</label>
                    <select onChange={(e) => setSubject(e.target.value)}>
                        <option value="math">Math</option>
                        <option value="science">Science</option>
                        <option value="english">English</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='description'>Assessment Description</label>
                    <input type='text' name='description' onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <p>Question 1</p>
                <div id='wrapper'>
                    <select onChange={(e) => saveSelectedQuestion(e.target.value, 0)}>
                    {
                        props.questions.map((question, index) => {
                            return(<option key={index} value={question.questionId}>{question.question}</option>)
                        })
                    }
                    </select>
                </div>
                <p>Question 2</p>
                <div id='wrapper'>
                    <select onChange={(e) => saveSelectedQuestion(e.target.value, 1)}>
                    {
                        props.questions.map((question, index) => {
                            return(<option key={index} value={question.questionId}>{question.question}</option>)
                        })
                    }
                    </select>
                </div>
                <p>Question 3</p>
                <div id='wrapper'>
                    <select onChange={(e) => saveSelectedQuestion(e.target.value, 2)}>
                    {
                        props.questions.map((question, index) => {
                            return(<option key={index} value={question.questionId}>{question.question}</option>)
                        })
                    }
                    </select>
                </div>
                <p>Question 4</p>
                <div id='wrapper'>
                    <select onChange={(e) => saveSelectedQuestion(e.target.value, 3)}>
                    {
                        props.questions.map((question, index) => {
                            return(<option key={index} value={question.questionId}>{question.question}</option>)
                        })
                    }
                    </select>
                </div>
                <p>Question 5</p>
                <div id='wrapper'>
                    <select onChange={(e) => saveSelectedQuestion(e.target.value, 4)}>
                    {
                        props.questions.map((question, index) => {
                            return(<option key={index} value={question.questionId}>{question.question}</option>)
                        })
                    }
                    </select>
                </div>
                <label htmlFor='addQuestion'></label>
                <Button type="submit">Save Quiz</Button>
                </form>
        </div>
    </>
    );
}

export default CreateQuizForm;