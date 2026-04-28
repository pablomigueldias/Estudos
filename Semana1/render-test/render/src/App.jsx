import { useState } from 'react'
import './App.css'
import RenderTest from './RenderTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RenderTest />
    </>

  )
}

export default App
