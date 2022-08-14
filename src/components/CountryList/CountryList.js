import React from 'react';
import './CountryList.css';

function CountryList({ countries, selected }) {
  return (
<div>
      <ul className='country-list'>
        {countries.map(country => {
          return <li className="country-item"
            key={country.name}
            onClick={() => selected(country.name)}
          >
            {country.name}
          </li>
        })}
      </ul>
      <p>country information obtained through
                https://restcountries.com/</p>
</div>
  )
}

export default CountryList