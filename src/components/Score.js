import React, { useState, useEffect } from 'react'; 

function Score({score, answers}) {
    
    return (  
        <div>
            <p> {score} / {answers.length} </p>
        </div>
    )  
}
 
export default Score;