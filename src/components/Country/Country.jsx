import React, { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountries,handleVisitedFlag}) => {
    const [visited,setVisited] = useState(false);
    //  console.log(Object.values(country.currencies.currencies)[0].name);
    const handleVisited =() =>

    { 

        //basic system
// if(visited){
//     setVisited(false)
// }
// else{
//     setVisited(true)
// }
// second system--->
// setVisited(visited ? false : true);
//3rd system
setVisited(!visited);
handleVisitedCountries(country)

}

    return (
        <div className={`country ${visited && 'country-visited'}` }> 
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt}/>
            <h3>Country Name:{country.name.common}</h3>
            <p>Population:{country.population.population}</p>
            <p>currencies:{Object.values(country?.currencies?.currencies)?.[0]?.name}</p>
            
            <p>Area: {country.area.area} {country.area.area>300000 ? "Big Country" : 'small country'}</p>
            <button onClick={handleVisited}>
                {visited? 'Visited' : 'Not Visited'}</button>
                <button onClick={()=>{handleVisitedFlag(country?.flags?.flags?.png)}}>Add visited Flag</button>
        </div>
    );
};

export default Country;
