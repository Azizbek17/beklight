import React from 'react';
import './CountryInfo.css';

function CountryInfo({ country }) {
    return (
        <div className='country-info'>
            <h1>Country name: {country.name}</h1>
            <h2>Capitel: {country.capital}</h2>
            <h3 className='population'>population: {(country.population / 1000000).toFixed(1)} Million
            </h3>
        </div>
    )
}

export default CountryInfo