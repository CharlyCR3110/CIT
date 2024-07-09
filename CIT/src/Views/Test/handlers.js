export const handleNextPage = (endIndex, questionList, setCurrentPage, currentPage) => {
  if (endIndex < questionList.length) {
    setCurrentPage(currentPage + 1)
  }
}
