// src/components/organisms/QuestionListComponent.js
import React from 'react'
import QuestionList from '../molecules/QuestionList'
import '../../assets/styles/question_list_component.css'

const QuestionListComponent = ({ questionList, currentPage, setCurrentPage, answers }) => {
  const handleClick = (index) => {
    const pageIndex = Math.floor(index / 5)
    setCurrentPage(pageIndex)

    setTimeout(() => {
      const element = document.getElementById(`question-${index}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100) // si no se pone un tiempo de espera, el scrollIntoView no funciona correctamente
  }

  return (
    <div className='question-list'>
      <h3>Lista de Preguntas</h3>
      <QuestionList questionList={questionList} answers={answers} handleClick={handleClick} />
    </div>
  )
}

export default QuestionListComponent
