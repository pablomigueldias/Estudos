import React from 'react'
import { useState, memo } from 'react'

const RenderTest = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    console.log('Render: Parent renderizou')

    return (
        <div style={{ padding: '20px', border: '2px solid blue' }}>
            <h2>Parent</h2>
            <p>Count: {count}</p>
            <p>Name {name}</p>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"

            />
            <button onClick={() => setCount(count + 1)}>Count:{count}</button>
            <Child key={count} count={count} />

        </div>


    )
}

const Child = memo(function Child({ count }) {
    console.log('Render: Child renderizou');

    return (
        <div style={{ padding: '10px', border: '2px solid red', marginTop: '10px' }}>
            <h3>Child</h3>
            <p>Count recebido: {count}</p>
        </div>
    )
})

export default RenderTest