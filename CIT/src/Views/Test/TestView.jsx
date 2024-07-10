import React, { useState } from 'react'
import QuestionComponent from '../../Components/QA/Questions/QuestionComponent'
import QuestionListComponent from '../../Components/QA/QuestionList/QuestionListComponent'
import { handleNextPage, handlePrevPage, handleAnswerSelect, getCurrentAnswers } from './handlers'
import '../../assets/styles/test_view.css'

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
      <header className='app-header'>
        <h1>{testName}</h1>
      </header>
      <div className='test-container'>
        <div className='questions-container'>
          {currentQuestions.map((question, index) => (
            <div id={`question-${startIndex + index}`} key={startIndex + index}>
              <QuestionComponent
                index={startIndex + index}
                questionText={question.questionText}
                answers={question.answers}
                selectedAnswer={answers[startIndex + index]}
                onAnswerSelect={(answer) => handleAnswerSelect(answers, setAnswers, setError, startIndex + index, answer)}
              />
            </div>
          ))}
        </div>
        <QuestionListComponent
          questionList={questionList}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          answers={answers}
        />
      </div>
      <div className='pagination'>
        <button
          onClick={() => handlePrevPage(setCurrentPage, currentPage)}
          disabled={currentPage === 0}
          className='prev'
        >
          Anterior
        </button>
        {endIndex >= questionList.length
          ? (
            <button
              onClick={() => getCurrentAnswers(answers, setError)}
              className='submit'
            >
              Enviar respuestas
            </button>
            )
          : (
            <button
              onClick={() => handleNextPage(setCurrentPage, currentPage)}
              disabled={endIndex >= questionList.length}
              className='next'
            >
              Siguiente
            </button>
            )}
      </div>
      {error && <div className='error'>{error}</div>}
    </>
  )
}

export default TestView
