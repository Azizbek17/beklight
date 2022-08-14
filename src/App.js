import {useState, useEffect} from 'react';
import './App.css';
import CountryList from './components/CountryList/CountryList';
import CountryInfo from './components/CountryInfo/CountryInfo';


function App() {
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState({})

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(countries => setCountries(countries))
  }, []);

  const selectCountry = name => {
    const [currentCountry] = countries.filter(item => item.name === name);
    setCurrentCountry(currentCountry)
  }

  return (
    <div className="App">
      <CountryList countries={countries} selected={selectCountry}/>
      { Object.keys(currentCountry).length !== 0 ? 
      <CountryInfo country={currentCountry}/> : 
      <h1>Выберите страну</h1>
      }
    </div>
  );
}

export default App;
