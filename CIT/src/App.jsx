import TestView from './Views/Test/TestView'
import './App.css'
import questionsExample from './temp/questions'

function App () {
  return (
    <div className='App'>
      <TestView questionList={questionsExample} testName='DAI' />
    </div>
  )
}

export default App
