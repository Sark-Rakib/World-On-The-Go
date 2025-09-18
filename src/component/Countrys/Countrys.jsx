import React, { use, useState } from 'react';
import Country from './Country/Country';
import './countries.css'

const Countries = ({CountriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        // console.log('country visited', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const countriesData = use(CountriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length} </h3>
            <div className='countries'>
                {
                countries.map(country => <Country key={country.cca3.cca3} country={country} 
                 handleVisitedCountries = {handleVisitedCountries}>
                </Country>
                )
            }
            </div>
        </div>
    );
};

export default Countries;