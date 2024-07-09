import React, { useState } from 'react'
import QuestionComponent from '../../Components/QA/Questions/QuestionComponent'
import { handleNextPage, handlePrevPage, handleAnswerSelect, getCurrentAnswers } from './handlers'

const TestView = ({ questionList, testName }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [answers, setAnswers] = useState(Array(questionList.length).fill(null))
  const [error, setError] = useState('')
  const questionsPerPage = 5

  const startIndex = currentPage * questionsPerPage
  const endIndex = startIndex + questionsPerPage
  const currentQuestions = questionList.slice(startIndex, endIndex)

  return (
    <>
      <header className='App-header'>
        <h1>{testName}</h1>
      </header>
      <div>
        {currentQuestions.map((question, index) => (
          <QuestionComponent
            key={startIndex + index}
            questionText={question.questionText}
            answers={question.answers}
            selectedAnswer={answers[startIndex + index]}
            onAnswerSelect={(answer) => handleAnswerSelect(answers, setAnswers, setError, startIndex + index, answer)}
          />
        ))}
      </div>
      <div className='pagination'>
        <button onClick={() => handlePrevPage(endIndex, questionList, setCurrentPage, currentPage)} disabled={currentPage === 0} className='prev'>Anterior</button>
        <button onClick={() => handleNextPage(endIndex, questionList, setCurrentPage, currentPage)} disabled={endIndex >= questionList.length} className='next'>Siguiente</button>
      </div>
      {endIndex >= questionList.length && (
        <div className='submit'>
          <button onClick={() => getCurrentAnswers(answers, setError)}>Enviar respuestas</button>
        </div>
      )}
      {error && <div className='error'>{error}</div>}
    </>
  )
}

export default TestView
