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
                <label htmlFor="city" className="">Ciudad: </label>
                <input type="text"  name="city" id="city" value={city} onChange={handleChange}  className=""/>
            </div>

            <div className="">
                <label htmlFor="country" className="">País: </label>
                <select name="country" id="country" value={country} onChange={handleChange}  className="">
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
                <input type="submit" value="Buscar" className="" />
            </div>
        </form>
     );
}

 
export default Form;