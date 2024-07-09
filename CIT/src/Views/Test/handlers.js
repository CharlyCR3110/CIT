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
