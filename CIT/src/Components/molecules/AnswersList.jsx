import React from 'react'
import AnswerComponent from '../atoms/AnswerComponent'

const AnswersList = ({ answers, localSelectedAnswer, handleSelect }) => {
  return (
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
  )
}

export default AnswersList
