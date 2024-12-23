import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Bienvenido a nuestra Fake Fundación de Adopción de Mascotas
      </h1>
      <p className="read-the-docs">
        La mejor compañía que buscas para ti y tu familia.
      </p>
    </>
  )
}

export default App
