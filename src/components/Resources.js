import React from 'react'
import { Jumbotron, Button } from 'reactstrap';




const Resources = (props) => {
    return (
        <>
            <div className="outerWrapper">
                <div className="innerWrapper">
                    <h1>Official Resources</h1>
                    <label htmlFor='Official Resources'>Official TutorPro YouTube Channel</label>
                    <a href="https://www.youtube.com/channel/UCu0rOtorQAeH1vkRW_fjuoQ/featured">TutorPro YouTube</a>
                </div>
                <div className="innerWrapper">
                    <div>
                        <h1>Third Party Resources</h1>
                        <label htmlFor='Calculator'>Calculator</label>
                        <a href="https://www.desmos.com">Desmos</a>
                    </div>
                    <div>
                        <label htmlFor='WolframAlpha'>Math Solver</label>
                        <a href="https://www.WolframAlpha.com">WolframAlpha</a>
                    </div>
                    <div>
                        <label htmlFor='Utah Core'>Utah Core Curriculum</label>
                        <a href="https://www.uen.org/core/">Utah Education Network</a>
                    </div>
                    <div>
                        <label htmlFor='khan'>Khan Academy</label>
                        <a href="https://www.khanacademy.org/">Khan Academy</a>
                    </div>
                    <div>
                        <label htmlFor='abc mouse'>abc mouse</label>
                        <a href="https://www.abcmouse.com/">ABC Mouse</a>
                    </div>
                    <div>
                        <label htmlFor='lexia'>Lexia Learning</label>
                        <a href="https://www.lexialearning.com/">Lexia Learning</a>
                    </div>
                </div>
            </div>
        </>

    ) 
}

export default Resources;