import './App.css';
import Cotizador from './vistas/Cotizador';
import {ContextProvider, useContexto} from './estadoApp/contexto'
import React, { useState, useEffect } from 'react';

function App() {

const {iniciarContador} = useContexto()

useEffect(()=>{
  iniciarContador()
},[])

  return (
    <div className="App">
        <Cotizador/>
    </div>
  );
}

export default ()=> 
<ContextProvider>  
    <App></App>
</ContextProvider>

