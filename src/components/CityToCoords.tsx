import React, { useState } from 'react';
import { findCoords, callSunTimes } from '../api/api'
import './components.css';

function CityToCoords(props: any): JSX.Element {

  const [dayLength, setDayLength] = useState(0);
  const [searchResults, setSearchResults] = useState<any>([])
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [chosenCity, setChosenCity] = useState("");

  // Selects everything after comma in formatted city to deliver city name
  const regex = /,(.*)/

  // Keeps track of search term
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.currentTarget.value)
  }

  // Use search term to call for matching list of cities and coordinates
  const searchHandler = () => {
    findCoords(searchTerm).then((res) => {
      setSearchResults(res.data.results)
      setDayLength(0)
    })
  }

  // Use coordinates to call city's daylight data
  const chosenHandler = (lat: number, lng: number, city: string) => {
    setChosenCity(city.replace(regex, ""))

    callSunTimes(lat, lng, props.date).then((res) => {
      setDayLength(res.data.results.day_length)
      setSearchResults([])
      props.displayData(props.cityNumber, res.data.results.day_length, city.replace(regex, ""))
    });
  }

  return (
    <div>
      <div className="about-screen">
        <input
          className="city-search-input m-3"
          onChange={handleSearchChange}
          value={searchTerm}
          placeholder="Search Location"
        />
        <button onClick={searchHandler}>Search</button>

        {/* If we have a list to display, display it. */}
        {searchResults.length > 0
          ?
          <div className="row justify-content-center mt-2">
            <div className="col-auto border border-secondary bg-light">
              <h4 className="mt-2">Choose the correct location</h4>
              <ul className="city-list">

                {/* Map over city list to display list with select buttons */}
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
          // Otherwise, no list will display
          : null}

        <div>{dayLength !== 0 && <div>{chosenCity} has <span className="day-length">{dayLength}</span> of daylight.</div>}</div>
      </div>
    </div>
  )
};
export default CityToCoords;