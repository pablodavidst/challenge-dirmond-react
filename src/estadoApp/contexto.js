import React, { useState, useEffect, useMemo } from 'react';

const contexto = React.createContext();

export function ContextProvider(props){
    const [contador,setContador] = useState(0)

    const iniciarContador = ()=>{
        console.log('iniciando intervalo...')
        setInterval(() => {
            setContador(Math.floor(Math.random() * 100))
        }, 5000)
    }

       const value = useMemo(()=>{
        return (
            {iniciarContador,contador}
        )
    },[contador])

    return <contexto.Provider value={value} {...props}/>
}

// Para que los componentes puedan consumir este contexto hay que exportar un hook
// para que se importe y se suscriba cada componente

export function useContexto(){ 
    const context = React.useContext(contexto)

    if (!context){
        throw new Error("useDataGlobal debe estar dentro del proveedor ContextProvider")
    } 
      return context; 
}

