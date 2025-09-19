import React, { use, useState } from 'react';
import Country from './Country/Country';
import './countries.css'

const Countries = ({CountriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        // console.log('country visited', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) => {
       const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    const countriesData = use(CountriesPromise);
    const countries = countriesData.countries;
    return (
        <div>
           <div className='upper-part'>
             <h1 className='total-country'>Total Countries In The World: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length} </h3>
            <h3>Total Flags Visited: {visitedFlags.length} </h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
           </div>

                <div className='visited-flags'>
                    {
                        visitedFlags.map((flag, index) => <img key={index} src={flag} alt="flag"/>)
                    }
                </div>

            <div className='countries'>
                {
                countries.map(country => <Country key={country.cca3.cca3} country={country} 
                 handleVisitedCountries = {handleVisitedCountries}
                 handleVisitedFlags = {handleVisitedFlags}>
                </Country>
                )
            }
            </div>
        </div>
    );
};

export default Countries;