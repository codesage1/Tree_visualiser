import { useState } from 'react'
import './App.css'
import TreeNode from './components/TreeVisualizer/TreeNode'
import TreeVisualiser from './components/TreeVisualizer/TreeVisualiser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TreeVisualiser/>
    </>
  )
}

export default App
