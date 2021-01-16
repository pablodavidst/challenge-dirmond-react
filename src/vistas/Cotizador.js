import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import {useContexto} from '../estadoApp/contexto'
import DetalleCotizaciones from '../componentes/DetalleCotizaciones'

export default function Cotizador(){

    const [cotizaciones,setCotizaciones]=useState([])
    const [buscandoCotizaciones,setBuscandoCotizaciones]=useState(false)
    const {contador}=useContexto()

    useEffect(()=>{
        const buscarCotizaciones = async ()=>{

            setBuscandoCotizaciones(true)

            try{
                const vectorCotizaciones = await Promise.all([Axios.get('/cotizacion/dolar'),
                                                    Axios.get('/cotizacion/euro'),
                                                    Axios.get('/cotizacion/real')])
                
                setCotizaciones(vectorCotizaciones)
                setBuscandoCotizaciones(false)

            }catch(err){
                setBuscandoCotizaciones(false)
                alert('Se produjo un error al buscar las cotizaciones' + err)
            }
        }

        buscarCotizaciones()

    },[contador])

    return <div className="divext">
        <div className="divint">
            <span className="titulo">Cotizaciones</span>
            <DetalleCotizaciones cotizaciones={cotizaciones}/>
        </div>

        {buscandoCotizaciones && <p>Actualizando cotizaciones...</p>}

    </div>
}

