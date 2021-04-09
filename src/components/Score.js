import React, { useState, useEffect } from 'react'; 
import confetti_pic from "./assets/confetti.png";
import thumbs_up_pic from "./assets/thumbs_up.png";
import indifferent_face_pic from "./assets/indifferent_face.png";
import sad_face_pic from "./assets/why_you_so_bad.png";
import '.././stylesheets/main.scss';

function Score(props) {

    let grade = Math.round(parseFloat(props.score / props.quizLength) * 100); 
      
    if(grade >= 95){
        return (
            <div className="scoreBoard">
                <h1>Great Job!</h1>
                <h5 className="score">Your score is {props.score} / {props.quizLength}, or {grade}%</h5>
                <br></br>
                <br></br>
                <img src={confetti_pic} alt="confetti" width="25%" height="auto"></img>
            </div>
        )
        
    } else if(grade >= 85){
        return (
            <div className="scoreBoard">
                <h1>Good Job!</h1>
                <h5 className="score">Your score is {props.score} / {props.quizLength}, or {grade}%</h5>
                <br></br>
                <br></br>
                <img src={thumbs_up_pic} alt="thumbs up" width="25%" height="auto"></img>
            </div>
        )
    } else if(grade >= 75){
        return (
            <div className="scoreBoard">
                <h1>Passing</h1>
                <h5 className="score">Your score is {props.score} / {props.quizLength}, or {grade}%</h5>
                <br></br>
                <br></br>
                <img src={indifferent_face_pic} alt="indifferent face" width="25%" height="auto"></img>
            </div>
        )
    } else {
        return (
            <div className="scoreBoard">
                <h1>Try Harder</h1>
                <h5 className="score">Your score is {props.score} / {props.quizLength}, or {grade}%</h5>
                <br></br>
                <br></br>
                <img src={sad_face_pic} alt="sad face" width="25%" height="auto"></img>
            </div>
        )
    }
}
 
export default Score;