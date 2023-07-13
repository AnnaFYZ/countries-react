import { useState } from 'react';
import './App.css';
import Countries from "./countriesAll.json";
import SelectByRegion from './SelectByRegion';
import Search from './Search';

function CreateCardForCountry (props) {
     return (
     <div className="CardDiv">
       {props.list.filter((country) => props.filters.region === "Select region..." 
       ? true : country.region === props.filters.region)
       .filter((country) => props.filters.searchInput === ""
       ? true : country.name.toLocaleLowerCase().includes(props.filters.searchInput) || country.capital.toLocaleLowerCase().includes(props.filters.searchInput))
       .map((country) => (
         <div className="CountryCard" key={country.name}>
           <img
             src={`https://flagcdn.com/w160/${country.alpha2Code.toLowerCase()}.png`}
             className="flagImage"
             alt={country.name}
           />
           <div className="GeneralInfo">
             <h3 className="CountryName">{country.name}</h3>
             <p>
               <b>Population:</b> {country.population}
             </p>
             <p>
               <b>Region:</b> {country.region}
             </p>
             <p>
               <b>Capital:</b> {country.capital}
             </p>
           </div>
         </div>
       ))}
     </div>
   );
  }

function App() {
  let [filters, setFilters] = useState({
    region: "Select region...",
    searchInput: "",
  });

  const searchByRegion = (region) => {
    region !== "Select region..."
    ? setFilters({...filters, "region": region})
    : setFilters({...filters, "region": "Select region..."})
  }
  
  const searchOption = (searchInput) => {
    searchInput !=="" 
    ? setFilters({...filters, "searchInput" : searchInput.toLowerCase()})
    : setFilters({...filters, "searchInput" : ""})
    // setCountryList(filteredByRegion.filter((country) => country.name.toLocaleLowerCase().includes(searchInput.toLowerCase()) || country.capital.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())))
    //  : setCountryList(filteredByRegion)
      }
  
  return (
    <div className="App">
      <Search search={searchOption}/>
      <SelectByRegion listForOptions={Countries} search={searchByRegion}/>
      <CreateCardForCountry list={Countries} filters={filters}/>
    </div>
  );
}

export default App;
