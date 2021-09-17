import React from 'react'
const Weather = ({result, setBg}) => {
    if(!result.name) return null;
    let temperature = parseFloat( result.main.temp - 273.15 ).toFixed(0);
    let icon = result.weather[0].icon;
    let direction;
    let directionG=result.wind.deg;
    if(directionG>=345 && directionG<=360) direction="Norte"
    if(directionG>=0 && directionG<=22) direction="Norte"
    if(directionG>=23 && directionG<=68) direction="Noreste"
    if(directionG>=69 && directionG<=114) direction="Este"
    if(directionG>=115 && directionG<=160) direction="Sureste"
    if(directionG>=161 && directionG<=206) direction="Sur"
    if(directionG>=207 && directionG<=252) direction="Suroeste"
    if(directionG>=253 && directionG<=298) direction="Oeste"
    if(directionG>=299 && directionG<=344) direction="Noroeste"
    if(icon.includes("n")){
        icon = icon.replace("n", "d")
    }
    switch(icon){
        case '01d': setBg("bg-sunny          bg-cover bg-bottom absolute h-full w-screen");break;
        case '02d': setBg("bg-sunny          bg-cover bg-bottom absolute h-full w-screen");break;
        case '03d': setBg("bg-cloudy         bg-cover bg-bottom absolute h-full w-screen");break;
        case '04d': setBg("bg-cloudy         bg-cover bg-bottom absolute h-full w-screen");break;
        case '09d': setBg("bg-rainy          bg-cover bg-bottom absolute h-full w-screen");break;
        case '10d': setBg("bg-rainy          bg-cover bg-bottom absolute h-full w-screen");break;
        case '11d': setBg("bg-thunderstormy  bg-cover bg-bottom absolute h-full w-screen");break;
        case '13d': setBg("bg-snowy          bg-cover bg-bottom absolute h-full w-screen");break;
        case '50d': setBg("bg-foggy          bg-cover bg-bottom absolute h-full w-screen");break;
        default:    setBg("bg-gradient-to-br from-gray-300 via-blue-200 to-blue-500 h-full w-screen");break;
      }
    let color;
    if (temperature<=18){
        color="text-blue-600"
    }else{
        if (temperature>=28){
            color="text-red-600"
        }else{
            color="text-gray-700"
        }
    }
    return ( 
        <>
            <div className="flex mx-auto justify-center">
                <h1 className="font-bold">{result.name},</h1> 
                <p className="ml-3">{result.sys.country}</p>
            </div>

            <h2 className="mt-5"> Temperatura: <span className={`${color} font-bold`}> { temperature } ºC</span></h2>
            <h2 className="capitalize underline mb-5 font-bold flex justify-center">{result.weather[0].description} <img src={`/${icon}.png`} alt="Weather icon" className="bg-gray-300 rounded-full ml-3" /></h2>

            <h2 className="">Sensacion termica de: <span className="underline text-black font-bold">{ parseFloat( result.main.feels_like - 273.15 ).toFixed(0) }ºC</span></h2>
            <h3 className="">Temperatura maxima: <span className="underline text-black font-bold">{ parseFloat( result.main.temp_max - 273.15 ).toFixed(0) }ºC</span></h3>
            <h3 className="">Temperatura minima: <span className="underline text-black font-bold">{ parseFloat( result.main.temp_min - 273.15 ).toFixed(0) }ºC</span></h3>
            
            <h3 className="">Humedad: <span className="underline text-black font-bold">{ result.main.humidity }%</span></h3>
            <h3 className="">Presion: <span className="underline text-black font-bold">{ result.main.pressure }Mbar</span></h3>
            
            <h2 className="">Velocidad del viento: <span className="underline text-black font-bold">{parseFloat( result.wind.speed * 3.6 ).toFixed(0)} Km/h </span></h2>
            <h2 className="">Direccion del viento: <span className="text-red-800 font-bold">{direction}</span></h2>
            <h2 className="">Visibilidad: <span className="underline text-black font-bold">{parseFloat( result.visibility / 1000 ).toFixed(0)} Km</span></h2>
        </>
     );
}
 
export default Weather;