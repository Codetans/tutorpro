import React, { useState, useEffect } from 'react'; 

function Score(props) {
    
    return (  
        <div>
            <h1>Score Component</h1>
            <p> {props.score} / {props.quizLength} </p>
        </div>
    )  
}
 
export default Score;