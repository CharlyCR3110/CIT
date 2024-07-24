import React from 'react'
import '../../assets/styles/answer.css'

const AnswerComponent = ({ answer, handleSelect, selected }) => {
  return (
    <div className='answer'>
      <input
        type='checkbox'
        checked={selected}
        onChange={handleSelect}
      />
      {answer}
    </div>
  )
}

export default AnswerComponent
