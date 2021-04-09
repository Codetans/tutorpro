import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import {useFormik} from 'formik'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Collapse, Button, CardBody, Card } from 'reactstrap';

export function VHelp({message}) {
    return <p className="help">{message}</p>
}

const validationSchema = yup.object({
    question: yup.string().required(),
    answer: yup.string().required(),
    incorrect_answer1: yup.string().required(),
    incorrect_answer2: yup.string().required(),
    incorrect_answer3: yup.string().required(),
    grade_level: yup.string().required(),
    subject_id: yup.string().required(),
    reference: yup.string().required(),
    subject: yup.string().required()
})

function CreateQuizForm() {

    const [isOpen, setIsOpen] = useState(false);

    let toggle = () => setIsOpen(!isOpen);

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
            <Collapse isOpen ={isOpen}>
                <p>Question data goes here</p>
                <button>save question to quiz</button>
            </Collapse>
            <label htmlFor='addQuestion'>Question Name</label>
            <Button onClick = {toggle}>Add Question</Button>
        </div>
    </>
    );
}

export default CreateQuizForm;