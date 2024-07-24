// src/components/atoms/QuestionButton.js
import React from 'react'
// import '../../assets/styles/question_button.css'

const QuestionButton = ({ index, answered, handleClick }) => (
  <div
    className={`grid-item ${answered ? 'answered' : 'unanswered'}`}
    onClick={() => handleClick(index)}
  >
    {index + 1}
  </div>
)

export default QuestionButton
