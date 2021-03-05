import React, { useState, useEffect } from 'react';
import { Row } from 'reactstrap';
import QuizQuestions from './QuizQuestions'



//PURPOSE:
// take the data pull from the selectedQuiz component, and then set up a data structure with placements of the 
function SetupQuiz(questionList) {


    var listOfDataForQuestions = [];

    questionList.forEach(function (item) {
        arrayOfPlaces = randomizePlacement()

        listOfDataForQuestions.push({ qId: thing.questionId, correctPos: arrayOfPlaces[0], incorrectPos1: arrayOfPlaces[1], incorrectPos2: arrayOfPlaces[2], incorrectPos3: arrayOfPlaces[3], chosenBucket: -1 })
    });

    return (
        <div>
            {listOfDataForQuestions && <QuizQuestions listOfDataForQuestions={listOfDataForQuestions} />}
        </div>

    )
}



var [settingUp, quizDataStructure] = useState(0);


//data structure
// list: each row represents info for one question. length of aray is num questions.

// bucket 1: question id
// bucket 2: placement of correct answer (int)
// bucket 3: placement incorrect answer 1
// bucket 4: pla... answer 2
// bucket 5: placement of incorrect answer3
// bucket 6: bucket chosen by user.




// comment: setup the func setupQuiz and then import it into any react component.




function randomizePlacement(questionId) {
    randomArray = [0, 1, 2, 3]
    return randomArray;
}