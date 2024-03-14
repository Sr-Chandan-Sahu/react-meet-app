import React from 'react'

const Question = ({questions,onAnswerClick}) => {
  return (
    <div className='questions'>
     <h2>{questions.question}</h2>      
    </div>
  )
}

export default Question
