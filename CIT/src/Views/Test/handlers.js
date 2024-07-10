export const handleNextPage = (setCurrentPage, currentPage) => {
  setCurrentPage(currentPage + 1)
}

export const handlePrevPage = (setCurrentPage, currentPage) => {
  if (currentPage > 0) {
    setCurrentPage(currentPage - 1)
  }
}

export const handleAnswerSelect = (answers, setAnswers, setError, questionIndex, answer) => {
  const newAnswers = [...answers]
  newAnswers[questionIndex] = answer
  setAnswers(newAnswers)
  setError('') // Clear error message if any
}

export const getCurrentAnswers = (answers, setError) => {
  // check if there are any unanswered questions
  const unansweredQuestions = answers.some(answer => answer === null)
  if (unansweredQuestions) {
    setError('Por favor, responde a todas las preguntas antes de enviar el test.')
    return
  }

  console.log('Respuestas actuales:', answers)
  console.log('Enviando respuestas al servidor...') // when the server is ready
}
