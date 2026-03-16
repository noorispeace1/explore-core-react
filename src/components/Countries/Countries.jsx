
import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const [VisitedFlags,setVisitedFlags] = useState([]

    )


const handleVisitedCountries =(country) =>{
  const newVisitedCountries =[...visitedCountries,country]
  setVisitedCountries(newVisitedCountries)
}

const handleVisitedFlag =(flag)=>
{
    const newVisitedFlags =[...VisitedFlags,flag]
    setVisitedFlags(newVisitedFlags)

}
    const countriesData = use(countriesPromise);


    const countries = countriesData.countries;

 

    return (
        <div>
             <h2>Total Countries: {countries.length}</h2>
             <h3>Total Country Visited:{visitedCountries.length}</h3>
             <h3>Total Flags Visited:{VisitedFlags.length}</h3>
             <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
             </ol>
            <div className='countries'>

            {
                countries.map(country => <Country 
                    key={country.cca3.cca3}
                    country={country}handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlag={handleVisitedFlag}></Country>)
            }
            </div>
           
        </div>
    );
};

export default Countries;
