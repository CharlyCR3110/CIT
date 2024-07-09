import TestView from './Views/Test/TestView'
import './App.css'

const questionsExample = [
  {
    questionText: 'What is React?',
    answers: [
      'A library for building user interfaces',
      'A framework for building user interfaces',
      'A language for building user interfaces',
      'A database for building user interfaces'
    ],
    correctAnswer: 'A library for building user interfaces'
  },
  {
    questionText: 'What is Vite?',
    answers: [
      'A library for building user interfaces',
      'A framework for building user interfaces',
      'A language for building user interfaces',
      'A build tool that aims to provide a faster and leaner development experience for modern web projects'
    ],
    correctAnswer: 'A build tool that aims to provide a faster and leaner development experience for modern web projects'
  }
]

function App () {
  return (
    <div className='App'>
      <TestView questionList={questionsExample} testName='DAI' />
    </div>
  )
}

export default App
