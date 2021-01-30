import React, { useState } from 'react';
import axios from 'axios'
import CityOptionButton from './CityOptionButton';
import './components.css';


function CityToCoords(): JSX.Element {

  const [coords, setCoords] = useState({
    lat: "",
    long: ""
  });

  const [searchResults, setSearchResults] = useState<any>([])

  const [input, setInput] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);

    setSearchTerm(event.currentTarget.value.toLowerCase())
  }
  const findCoords = () => {

    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${searchTerm}&key=${process.env.REACT_APP_COORDS_API_PW}`;
    axios.get(apiUrl).then((res) => {

      setSearchResults(res.data.results)
      // setCoords({ lat: res.data.results[0].geometry.lat, long: res.data.results[0].geometry.lng });
      console.log(res);

    });

    console.log(searchResults);


  }

  return (

    <div>

      <div className="about-screen">
        <input className="city-search-input" onChange={handleSearchChange} value={input} placeholder="Search Location" />
        <button onClick={findCoords}>Search</button>
        <p>Choose the correct location</p>
        {searchResults.length > 0 ?
          <div className="border border-primary col justify-items-center align-content-center">
            <ul className="city-list">
              {searchResults.map(function (city: any, index: number) {
                return <li>{city.formatted}<button key={index}>+</button></li>
              })}
            </ul>
          </div>
          : null}


      </div>

    </div>


  )

};
export default CityToCoords;