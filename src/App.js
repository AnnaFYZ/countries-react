import './App.css';
import Countries from "./countriesAll.json";
import image from "./allcountresglag.jpg";

function CreateCardForCountry (props) {
   return (props.list.map(country => {
    return (
      <div className="CountryCard">
        <img src={image} className="flagImage" alt="" />
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
    );
  })
  )
}

function App() {
  return (
    <div className="App">
      <CreateCardForCountry list={Countries}/>
    </div>
  );
}

export default App;
