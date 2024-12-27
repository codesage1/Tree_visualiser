import { useState } from 'react'
import './App.css'
import CircleWithNumber from './components/TreeVisualizer/CircleWithNumber'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Simple Circle with Number</h1>
      {/* Use the component and pass different numbers */}
      <CircleWithNumber number={1} />
      <CircleWithNumber number={5} />
      <CircleWithNumber number={10} />
    </>
  )
}

export default App
