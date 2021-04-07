import React from 'react';
import * as yup from 'yup';
import {useFormik} from 'formik'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

function QuestionForm() {

    let {handleSubmit, handleChange, values, errors, setFieldValue} = useFormik({
        initialValues: is_new ? {
            question: '',
            answer: '',
            incorrect_answer1: '',
            incorrect_answer2: '',
            incorrect_answer3: '',
            grade_level: '',
            subject_id: '',
            reference: '',
            subject: '' //what is this field all values are null in the DB currently.
        } : {...question},
        validationSchema,
        onSubmit(values) {
            fetch('', {
                method: "POST",
                headers: {
                    //"Content-Type": "application/json"      This is just for the post header possibly just need an explanation consistent with ours
                },
                //credentials: 'same-origin',       This is used to  check if a user is signed in.
                //body: JSON.stringify(values)      May need to not stringify the values to JSON because we use SQL
            }).then(() => {
                toast('Successfully submitted', {
                    onClose: () => {
                        document.location = "/" //put a page to be redirected too after successfully saving
                    }
                })
            }).catch((error) => {
                toast('Failed to submit', {
                    onClose: () => {
                        document.location = "/" //page to redirect to after failing to save.
                    }
                })
            })
        }
    })

    return (
        <form onSubmit={handleSubmit}>
            <section id="form-section">
                <div className='field'>
                    <label htmlFor='question'>Question</label>
                    <div className='control'>
                        <input type='text' name='question' value={values.question} onChange={handleChange}/>
                        <VHelp message={errors.question}/>
                    </div>
                </div>
                <div className='field'>
                    <label htmlFor='answer'>Answer</label>
                    <div className='control'>
                        <input type='text' name='answer' value={values.answer} onChange={handleChange}/>
                        <VHelp message={errors.answer}/>
                    </div>
                </div>
                <div className='field'>
                    <label htmlFor='incorrect_answer1'>Incorrect Answer 1</label>
                    <div className='control'>
                        <input type='text' name='incorrect_answer1' value={values.incorrect_answer1}
                               onChange={handleChange}/>
                        <VHelp message={errors.incorrect_answer1}/>
                    </div>
                </div>
                <div className='field'>
                    <label htmlFor='incorrect_answer2'>Incorrect Answer 2</label>
                    <div className='control'>
                        <input type='text' name='incorrect_answer2' value={values.incorrect_answer2}
                               onChange={handleChange}/>
                        <VHelp message={errors.incorrect_answer2}/>
                    </div>
                </div>
                <div className='field'>
                    <label htmlFor='incorrect_answer3'>Incorrect Answer 3</label>
                    <div className='control'>
                        <input type='text' name='incorrect_answer3' value={values.incorrect_answer3}
                               onChange={handleChange}/>
                        <VHelp message={errors.incorrect_answer3}/>
                    </div>
                </div>
                <div className='field'>
                    <label htmlFor='grade_level'>Grade Level</label>
                    <div className='control'>
                        <input type='text' name='grade_level' value={values.grade_level} onChange={handleChange}/>
                        <VHelp message={errors.grade_level}/>
                    </div>
                </div>
                <div className='field'>
                    <label htmlFor='subject_id'>Subject_id</label>
                    <div className='control'>
                        <input type='text' name='subject_id' value={values.subject_id} onChange={handleChange}/>
                        <VHelp message={errors.subject_id}/>
                    </div>
                </div>
                <div className='field'>
                    <label htmlFor='reference'>Reference</label>
                    <div className='control'>
                        <input type='text' name='reference' value={values.reference} onChange={handleChange}/>
                        <VHelp message={errors.reference}/>
                    </div>
                </div>
                <div className='field'>
                    <label htmlFor='subject'>Subject</label>
                    <div className='control'>
                        <input type='text' name='subject' value={values.subject} onChange={handleChange}/>
                        <VHelp message={errors.subject}/>
                    </div>
                </div>
            </section>
        </form>
    );
}

export default QuestionForm;