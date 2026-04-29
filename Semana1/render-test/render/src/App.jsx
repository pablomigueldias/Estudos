import { useState } from 'react'
import './App.css'
import PropTest from './PropTest.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' },
  ])

  function addUser() {
    const newUser = { id: users.length + 1, name: `User ${users.length + 1}` }
    setUsers([...users, newUser])
  }

  return (
    <>
      <PropTest user={users} />
      <p>Adicionar um novo usuario</p>
      <p>Quantidade de User: {users.length}</p>
      <button onClick={addUser}>Adicionar</button>
    </>

  )
}

export default App
