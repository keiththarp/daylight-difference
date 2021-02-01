import React, { useState } from 'react';
import axios from 'axios'
import { findCoords, callSunTimes } from '../api/api'
// import CityOptionButton from './CityOptionButton';
import './components.css';

function CityToCoords(props: any): JSX.Element {

  const [dayLength, setDayLength] = useState(0);
  const [searchResults, setSearchResults] = useState<any>([])
  const [input, setInput] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [chosenCity, setChosenCity] = useState("");
  const regex = /,(.*)/

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);

    setSearchTerm(event.currentTarget.value.toLowerCase())
  }
  const searchHandler = () => {
    findCoords(searchTerm).then((res) => {
      setSearchResults(res.data.results)
      setDayLength(0)
      console.log(res);
    })
  }

  const chosenHandler = (lat: number, lng: number, city: string) => {
    setChosenCity(city.replace(regex, ""))

    callSunTimes(lat, lng).then((res) => {
      setDayLength(res.data.results.day_length)
      setSearchResults([])
      props.displayData(props.cityNumber, res.data.results.day_length, city.replace(regex, ""))
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
        <button onClick={searchHandler}>Search</button>
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
                        chosenHandler(city.geometry.lat, city.geometry.lng, city.formatted);

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