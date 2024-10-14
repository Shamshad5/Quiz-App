import React from 'react'
import "./QuestionsList.css"

const QuestionsList = ({questions,options,handleClick,currentAnswer}) => {
  return (
      <>
        <div className="list">
            <h1>{questions}</h1>

            <ul>
                {options.map((option,index)=>(
                    <li key={index} 
                        onClick={()=>handleClick(option)}
                        className={currentAnswer===option ? 'select' : ''}>
                            {option}
                    </li>
                ))}
            </ul>
        </div>
      </>
  )
}

export default QuestionsList