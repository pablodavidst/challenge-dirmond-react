import React from 'react'

export default function DetalleCotizaciones({cotizaciones}){

            if(cotizaciones.length == 0){
                return null
            } 
                
            return <div className="centro">
                <span className="moneda">Dolar</span>
                <span className="ml-1 mr-4">{obtenerPrecioSegunMoneda(cotizaciones,'dolar')}</span>
                <span className="moneda">Euro</span>
                <span className="ml-1 mr-4">{obtenerPrecioSegunMoneda(cotizaciones,'euro')}</span>
                <span className="moneda">Real</span>
                <span className="ml-1">{obtenerPrecioSegunMoneda(cotizaciones,'real')}</span>
            </div>
   
}

function obtenerPrecioSegunMoneda(cotizaciones,moneda_a_cotizar){

    const datos_moneda_a_cotizar = cotizaciones
                                    .map(item=>item.data)
                                    .filter(item=>item.moneda==moneda_a_cotizar)[0]

    if (datos_moneda_a_cotizar){
        return datos_moneda_a_cotizar.precio
    }else{
        return null
    }
     
}