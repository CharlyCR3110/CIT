import React from 'react'
import '../../../assets/styles/question_list_component.css'

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
      <div className='grid-container'>
        {questionList.map((question, index) => (
          <div
            key={index}
            className={`grid-item ${answers[index] ? 'answered' : 'unanswered'}`}
            onClick={() => handleClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  )
}

export default QuestionListComponent
