import React, { useState } from 'react'
import questions from './questions.json'
import Question from './Question'

function QuizApp() {
    const [currentQuestion, setCurrentQuestion]=useState(0)
    const [userAnswer,setUserAnswer] = useState([])
    const handleNextQuestion =() => {}
  return (
    <div className='App'>
      <h1>Programming Language Questions</h1>
      {/* Questions Component */}
        <Question questions={questions[currentQuestion]} onAnswerClick={handleNextQuestion}/>
      {/* Result Component */}
    </div>
  )
}

export default QuizApp
