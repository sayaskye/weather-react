import React, { useState, useEffect } from 'react';
import Weather from './components/Weather';
import Error from './components/Error';
import Form from './components/Form'

const App = () => {

  const [search, setSearch] = useState({ 
    city: '',
    country: ''
  });
  const [consulting, setConsulting] = useState(false);
  const [result, setResult] = useState({});
  const [error, setError] = useState(false);

  const { city, country } = search;
  const consultAPI = async () => {
    if(consulting) {
      const appId = '31b33df22fe2b492d9b74843003438fe';
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}&lang=sp`;

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
    component = <Weather result={result}/>
  }
  
  useEffect(() => {
    consultAPI();
    // eslint-disable-next-line
  },[consulting]);

  return ( 
    <div className="bg-snowy bg-cover bg-bottom">
      <div className="text-center flex flex-col h-screen content-between justify-between items-center bg-white/20 backdrop-blur-[2px]">

        <div className="mt-10 text-lg md:text-4xl rounded-3xl">
          {component}
        </div>
        <div className="mb-10 font-semibold ">
          <Form 
            search={search}
            setSearch={setSearch}
            setConsulting={setConsulting}
            className=""
          />
        </div>

      </div>
    </div>
  );
}
 
export default App;