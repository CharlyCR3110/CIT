import '../../../assets/styles/question.css'
import React, { useState, useEffect } from 'react'
import AnswerComponent from '../Answer/AnswerComponent'

const QuestionComponent = ({ questionText, answers, selectedAnswer, onAnswerSelect }) => {
  const [localSelectedAnswer, setLocalSelectedAnswer] = useState(selectedAnswer)

  useEffect(() => {
    setLocalSelectedAnswer(selectedAnswer)
  }, [selectedAnswer])

  const handleSelect = (answer) => {
    setLocalSelectedAnswer(answer)
    onAnswerSelect(answer)
  }

  return (
    <div className='question-container'>
      <h2 className='question-text'>{questionText}</h2>
      <div className='answers-container'>
        {answers.map((answer, index) => (
          <AnswerComponent
            key={index}
            answer={answer}
            selected={localSelectedAnswer === answer}
            handleSelect={() => handleSelect(answer)}
          />
        ))}
      </div>
    </div>
  )
}

export default QuestionComponent
