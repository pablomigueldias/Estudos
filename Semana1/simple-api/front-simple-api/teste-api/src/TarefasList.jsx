import React, { use } from 'react'
import { useState, useEffect } from 'react'

const TarefasList = () => {
    const [tarefas, setTarefas] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/tarefas')
            .then(response => response.json())
            .then(data => setTarefas(data))
    }, [])

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa.id}>{tarefa.tarefa}</li>
                ))}
            </ul>
        </div>
    )
}

export default TarefasList