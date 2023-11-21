import React, {useEffect, useState} from 'react'

const ComponenteFuncional = () => {

    const [click, setClick] = useState(0);

    useEffect(() => {

        //componentDidMount
        console.log("este componente se monto");

        //componentDidUpdate
        console.log("%c---------------------------", "color: red");

        //conponenWillUnmount
        console.log("el componente se desmonto");


    },[click])

    const handleContador = () => {
        setClick( click +1 )

    }

  return (
    <div>
        <h2>Hooks / Componentes Funcionales</h2>
        <button
            onClick={handleContador}
        >
            agregar : {click}
        </button>
    </div>
    
  
  )
}

export default ComponenteFuncional