import React, { useState } from 'react';
import "./Quiz.css";
import QuestionsList from './QuestionsList';

const Quiz = () => {
    const questions = [
        {
            question: "What is React",
            options: ["css framework", "React Library", "React Framework", "testing tool"],
            answer: "React Library"
        },
        {
            question: "What is 2 + 2?",
            options: ["1", "2", "4", "7"],
            answer: "4"
        },
        {
            question:"What does HTML stand for? ",
            options:["HyperText Markup Language","HighText Machine Language","HyperText and links Markup Language"],
            answer:"HyperText Markup Language"
        }
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer,setCurrentAnswer]=useState(null);
    const [score,setScore]=useState(0);

    const handleClick=(option)=>{
        setCurrentAnswer(option);
        if(option===questions[currentQuestionIndex].answer){
            setScore(score+1)
        }
    }

    const next = () => {
       setCurrentQuestionIndex(currentQuestionIndex+1)
       setCurrentAnswer(null)
    }
        

    return (
        <>
            {currentQuestionIndex<questions.length ?   
            
            <div className='main'>
                <QuestionsList 
                    questions={questions[currentQuestionIndex].question}
                    options={questions[currentQuestionIndex].options} 
                    handleClick={handleClick}
                    currentAnswer={currentAnswer}
                />
                <button 
                    disabled={currentAnswer===null} 
                    onClick={next}
                    className='btn'>Next
                </button>

            </div> : <div className="score">
                         <h1>Here is your score {score}</h1>
                     </div>}
          
        </>
    );
};

export default Quiz;
