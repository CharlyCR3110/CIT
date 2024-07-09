import QuestionComponent from '../../Components/QA/Questions/QuestionComponent'

// All the questions came in format of JSON object
// for example:
// {
//   [
//     {
//       questionText: 'What is the capital of France?',
//       answers: ['Paris', 'London', 'Berlin', 'Madrid'],
//       correctAnswer: 'Paris'
//     },
//     {
//       questionText: 'What is the capital of Spain?',
//       answers: ['Paris', 'London', 'Berlin', 'Madrid'],
//       correctAnswer: 'Madrid'
//     }
//   ]
// }
const TestView = ({ questionList, testName }) => {
  return (
    <>
      <header className='App-header'>
        <h1>{testName}</h1>
      </header>
      <div>
        {questionList.map((question, index) => (
          <QuestionComponent
            key={index}
            questionText={question.questionText}
            answers={question.answers}
            correctAnswer={question.correctAnswer}
          />
        ))}
      </div>
    </>
  )
}

export default TestView
