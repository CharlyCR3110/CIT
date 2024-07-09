export const handleNextPage = (endIndex, questionList, setCurrentPage, currentPage) => {
  if (endIndex < questionList.length) {
    setCurrentPage(currentPage + 1)
  }
}

export const handlePrevPage = (endIndex, questionList, setCurrentPage, currentPage) => {
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
