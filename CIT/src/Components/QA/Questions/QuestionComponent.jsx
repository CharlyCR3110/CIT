import '../../../assets/styles/question.css'

import React, { useState } from 'react'
import AnswerComponent from '../Answer/AnswerComponent'

const QuestionComponent = ({ questionText, answers, correctAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState('')

  const handleSelect = (answer) => {
    setSelectedAnswer(answer)
  }

  return (
    <div className='question-container'>
      <h2 className='question-text'>{questionText}</h2>
      <div className='answers-container'>
        {answers.map((answer, index) => (
          <AnswerComponent
            key={index}
            answer={answer}
            selected={selectedAnswer === answer}
            handleSelect={() => handleSelect(answer)}
          />
        ))}
      </div>
      {selectedAnswer && (
      // temporary feedback (correct/incorrect)
        <div className={`feedback ${selectedAnswer === correctAnswer ? 'correct' : 'incorrect'}`}>
          {selectedAnswer === correctAnswer ? 'Correct!' : 'Incorrect!'}
        </div>
      )}
    </div>
  )
}

export default QuestionComponent
