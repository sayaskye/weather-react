import React, { useState } from 'react';

const Form = ({search, setSearch, setConsulting}) => {

    const [error, setError] = useState(false);
    const {city, country} = search;

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(city.trim() === '' || country.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        setConsulting(true);
    }

    return ( 
        <form onSubmit={handleSubmit} >
            {error ? <p className="">Ambos campos son obligatorios</p> : null }
            
            <div className="">
                {/* <label htmlFor="city" className=""></label> */}
                <input type="text"  name="city" id="city" value={city} onChange={handleChange}  className="rounded-full px-3 mx-2 my-1 border-black border-2 text-center py-1 w-60"/>
            </div>

            <div className="">
                {/* <label htmlFor="country" className=""></label> */}
                <select name="country" id="country" value={country} onChange={handleChange}  className="rounded-full px-3 mx-2 my-1 border-black border-2 text-center py-1 w-60">
                    <option value="">-- Selecciona un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
            </div>

            <div className="">
                <input type="submit" value="Buscar" className="rounded-full px-3 mx-2 my-1 border-black border-2 text-center py-1 w-28" />
            </div>
        </form>
     );
}

 
export default Form;