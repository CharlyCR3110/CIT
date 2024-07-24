import React from 'react'
import QuestionButton from '../atoms/QuestionButton'
// import '../../assets/styles/question_list.css'

const QuestionList = ({ questionList, answers, handleClick }) => (
  <div className='grid-container'>
    {questionList.map((question, index) => (
      <QuestionButton
        key={index}
        index={index}
        answered={answers[index]}
        handleClick={handleClick}
      />
    ))}
  </div>
)

export default QuestionList
