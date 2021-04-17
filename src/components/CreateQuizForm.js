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
        console.log(description)
        console.log(subject)
        console.log(questions)
        
        axios.post('http://localhost:8080/assessment/create', {
        name: name,
        description: description,
        subject: subject,
        questionIds: questions
        })
        .then(res => {
            console.log(res.data)
            if(res.data === 'Quiz created successfully') {
                {props.createQuizData(name, description, subject)}
                {props.changeMode("createquizsaved")}
            } else {
                alert('There was a problem saving the quiz');
            }
        })
    }

    return (
    <>
        <h1 className="create-quiz-page-title">Creating a new quiz</h1>
        <div>
            <form autoComplete="off" onSubmit={saveQuestion}>
                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor='name'>Assessment Name</label>
                    </div>
                    <div className="col-md-2">
                        <input type='text' name='name' className="create-quiz-fields" placeholder="Enter the quiz name"
                        onChange={(e) => setName(e.target.value)} required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor='description'>Assessment Description</label>
                    </div>
                    <div className="col-md-2">
                        <input type='text' name='description' className="create-quiz-fields" placeholder="Enter the quiz description"
                        onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <label htmlFor='subject'>Subject</label>
                    </div>
                    <div className="col-md-2">
                        <select className="create-quiz-fields" onChange={(e) => setSubject(e.target.value)}>
                            <option value="math">Math</option>
                            <option value="science">Science</option>
                            <option value="english">English</option>
                        </select>
                    </div>
                </div>
                <div id='wrapper'>
                    <label htmlFor='question1'>Question 1</label>
                    <br />
                    <select onChange={(e) => saveSelectedQuestion(e.target.value, 0)}>
                    {
                        props.questions.map((question, index) => {
                            return(<option key={index} value={question.questionId}>{question.question}</option>)
                        })
                    }
                    </select>
                </div>
                <div id='wrapper'>
                    <label htmlFor='question2'>Question 2</label>
                    <br />
                    <select onChange={(e) => saveSelectedQuestion(e.target.value, 1)}>
                    {
                        props.questions.map((question, index) => {
                            return(<option key={index} value={question.questionId}>{question.question}</option>)
                        })
                    }
                    </select>
                </div>
                <div id='wrapper'>
                    <label htmlFor='question3'>Question 3</label>
                    <br />
                    <select onChange={(e) => saveSelectedQuestion(e.target.value, 2)}>
                    {
                        props.questions.map((question, index) => {
                            return(<option key={index} value={question.questionId}>{question.question}</option>)
                        })
                    }
                    </select>
                </div>
                <div id='wrapper'>
                    <label htmlFor='question4'>Question 4</label>
                    <br />
                    <select onChange={(e) => saveSelectedQuestion(e.target.value, 3)}>
                    {
                        props.questions.map((question, index) => {
                            return(<option key={index} value={question.questionId}>{question.question}</option>)
                        })
                    }
                    </select>
                </div>
                <div id='wrapper'>
                    <label htmlFor='question5'>Question 5</label>
                    <br />
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