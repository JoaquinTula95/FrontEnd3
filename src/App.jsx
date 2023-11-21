import { useState } from 'react'
import './App.css'
import ComponenteFuncional from './componentes/ComponenteFuncional'
import MouseEvent from './componentes/MouseEvent'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        Ciclos de Vida Funcional
      </h1>

      <ComponenteFuncional/>
      <>
      <MouseEvent/>
      </>


    
    </>
  )
}

export default App
