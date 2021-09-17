import React, { useState, useEffect } from 'react';
import Weather from './components/Weather';
import Error from './components/Error';
import Form from './components/Form'

const App = () => {

  const [search, setSearch] = useState({ 
    city: 'Juarez',
    country: 'MX'
  });
  const [consulting, setConsulting] = useState(false);
  const [result, setResult] = useState({});
  const [bg, setBg] = useState("");
  const [error, setError] = useState(false);

  const { city, country } = search;
  const consultAPI = async () => {
    if(consulting) {
      const appId = '31b33df22fe2b492d9b74843003438fe';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}&lang=sp`;

      const response = await fetch(url);
      const data = await response.json();

      setResult(data);
      setConsulting(false);

      if(data.cod === "404") {
        setError(true);
      } else {
        setError(false);
      }
    }
  }

  let component;
  if(error){
    component = <Error result={result}/>
  }else{
    component = <Weather result={result} setBg={setBg}/>
  }
  
  useEffect(() => {
    consultAPI();
    console.log(result);
    // eslint-disable-next-line
  },[consulting]);


  return ( 
    <>
      <div className={bg}>
        <div className="text-center flex flex-col content-between justify-between items-center h-full bg-white/20 backdrop-blur-[2px] z-50">
          <div className=" text-lg md:text-4xl rounded-xl p-10">
            {component}
          </div>
          <div className="pb-10 font-semibold ">
            <Form 
              search={search}
              setSearch={setSearch}
              setConsulting={setConsulting}
              className=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
 
export default App;