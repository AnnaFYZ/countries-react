import { useState, useEffect } from 'react';
import './App.css';
import Countries from "./countriesAll.json";
import SelectByRegion from './SelectByRegion';

function CreateCardForCountry (props) {
   return (
     <div className="CardDiv">
       {props.list.map((country) => (
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

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");
  function handleSearchInput (event) {
    setSearchInput(event.target.value)
  }
  useEffect(() => {props.search(searchInput)}, [searchInput]);
return <div>
  <input className='searchInput' type="text" placeholder='Type here what you are looking for ...'
  value={searchInput}
  onChange={handleSearchInput}
  ></input>
</div>
}

function App() {
  let [countryList, setCountryList] = useState(Countries);
  let [filteredByRegion, setFilteredByRegion] = useState(Countries);

  const searchByRegion = (region) => {
    region !== "Select region..."
      ? setCountryList(
          Countries.filter((country) => country.region === region)
        )
      : setFilteredByRegion(Countries);
  }
  
  const searchOption = (searchInput) => {
    searchInput !=="" ?
    setCountryList(countryList.filter((country) => country.name.toLocaleLowerCase().includes(searchInput.toLowerCase()) || country.capital.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())))
     : setCountryList(filteredByRegion)
      }
  
  return (
    <div className="App">
      <Search search={searchOption}/>
      <SelectByRegion listForOptions={Countries} search={searchByRegion}/>
      <CreateCardForCountry list={countryList}/>
    </div>
  );
}

export default App;
