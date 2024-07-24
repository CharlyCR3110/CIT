import React, { useState, useEffect } from 'react'
import AnswersList from '../molecules/AnswersList'
import '../../assets/styles/question.css'

const QuestionComponent = ({ index, questionText, answers, selectedAnswer, onAnswerSelect }) => {
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
      <h2 className='question-text'>{index + 1}. {questionText}</h2>
      <AnswersList
        answers={answers}
        localSelectedAnswer={localSelectedAnswer}
        handleSelect={handleSelect}
      />
    </div>
  )
}

export default QuestionComponent
