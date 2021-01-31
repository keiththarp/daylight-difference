import React, { useState } from 'react';
import axios from 'axios'
// import CityOptionButton from './CityOptionButton';
import './components.css';

function CityToCoords(): JSX.Element {

  const [dayLength, setDayLength] = useState(0);
  const [searchResults, setSearchResults] = useState<any>([])
  const [input, setInput] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [chosenCity, setChosenCity] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);

    setSearchTerm(event.currentTarget.value.toLowerCase())
  }

  const findCoords = () => {
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${searchTerm}&key=${process.env.REACT_APP_COORDS_API_PW}`;
    axios.get(apiUrl).then((res) => {
      setSearchResults(res.data.results)
      setDayLength(0)
      console.log(res);

    });
  }

  const callSunTimes = (lat: number, lng: number) => {
    const apiUrl = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`
    axios.get(apiUrl).then((res) => {
      setDayLength(res.data.results.day_length)
      setSearchResults([])
      console.log(res.data);

    });
  }

  return (

    <div>
      <div className="about-screen">
        <input
          className="city-search-input m-3"
          onChange={handleSearchChange}
          value={input}
          placeholder="Search Location"
        />
        <button onClick={findCoords}>Search</button>
        {searchResults.length > 0
          ?
          <div className="row justify-content-center mt-2">
            <div className="col-auto border border-secondary bg-light">
              <h4 className="mt-2">Choose the correct location</h4>
              <ul className="city-list">
                {searchResults.map(function (city: any, index: number) {
                  return <li key={index}>
                    <button
                      onClick={() => {
                        callSunTimes(city.geometry.lat, city.geometry.lng);
                        setChosenCity(city.formatted)
                      }
                      }
                      className="city-option-button"
                    >
                      +
                    </button>
                    {city.formatted}
                  </li>
                })}
              </ul>
            </div>
          </div>
          : null}
        <div>{dayLength !== 0 && <div>{chosenCity} has <span className="day-length">{dayLength}</span> of daylight.</div>}</div>

      </div>
    </div>
  )
};
export default CityToCoords;