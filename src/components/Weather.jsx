import React from 'react'
const Weather = ({result}) => {
    if(!result.name) return null;
    return ( 
        <>
            <h1 className="">{result.name}</h1>
            
            <p className="">{result.sys.country}</p>

            <h2 className="">
            Temperatura: 
            <span className=""> { parseFloat( result.main.temp - 273.15 ).toFixed(0) }</span>
            ºC
            </h2>

            <h2 className="">{result.weather[0].description}</h2>

            <h2 className="">Sensacion termica de { parseFloat( result.main.feels_like - 273.15 ).toFixed(0) }ºC</h2>

            <div className="flex flex-col md:flex-row justify-center">
            <h3 className="mx-2">Temperatura maxima: { parseFloat( result.main.temp_max - 273.15 ).toFixed(0) }ºC</h3>
            <h3 className="mx-2">Temperatura minima: { parseFloat( result.main.temp_min - 273.15 ).toFixed(0) }ºC</h3>
            </div>

            <div className="flex flex-col md:flex-row justify-center">
            <h3 className="mx-2">Humedad: { result.main.humidity }%</h3>
            <h3 className="mx-2">Presion: { result.main.pressure }Mbar</h3>
            </div>

            <h2 className="">Velocidad del viento: {parseFloat( result.wind.speed * 3.6 ).toFixed(0)} Km/h</h2>

            <h2 className="">Visibilidad: {parseFloat( result.visibility / 1000 ).toFixed(0)} Km</h2>
        </>
     );
}
 
export default Weather;