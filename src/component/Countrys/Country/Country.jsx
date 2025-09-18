import React, { useState } from 'react';
import './country.css'

const Country = ({country , handleVisitedCountries}) => {

    const [visited, setVisited] = useState(false);

//    console.log(country.population.population);

    const handleVisited = () => {
        // if(Visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true);
        // }
        setVisited(!visited ? true : false);
        handleVisitedCountries(country);
    }

    return (
        <div className={`country ${visited ? "country-visited" : ""}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
            <h3>Name - Common : {country.name.common}</h3>
            <h3>Name - Official : {country.name.official}</h3>
            {Object.keys(country.currencies.currencies).map((code) => (<h3 key={code}>
            Currencies - Name : {country.currencies.currencies[code].name}</h3>))}
            {Object.keys(country.currencies.currencies).map((code) => (
            <h3 key={code}>{code} - {country.currencies.currencies[code].name} 
            ({country.currencies.currencies[code].symbol})</h3>))}
            <h3>Capital : {country.capital.capital} </h3>
            <h4>Area : {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"} </h4>
            <p>Population: {country.population.population}</p>
            <p>Ccn3 : {country.ccn3.ccn3} </p>
            <button onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
                </button>
        </div>
    );
};

export default Country;