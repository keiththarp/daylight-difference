import React, { useEffect, useState } from 'react';
import CityToCoords from '../../components/CityToCoords';
import { DateTime } from "luxon";

// Set today's date for date input
const today = DateTime.local().toFormat('yyyy-MM-dd')

function Differentiator(): JSX.Element {

  const [date, setDate] = useState<string>(today);
  const [locationData, setLocationData] = useState({
    city1: "",
    daylight1: 0,
    city2: "",
    daylight2: 0
  })
  const { city1, daylight1, city2, daylight2 } = locationData

  // Take in data from components and set to state
  const dataSetter = (cityNumber: number, daylight: number, cityName: string) => {
    if (cityNumber === 1) {
      setLocationData({
        ...locationData,
        city1: cityName,
        daylight1: daylight
      })
    } else {
      setLocationData({
        ...locationData,
        city2: cityName,
        daylight2: daylight
      })
    }
  }

  // If date is chosen update state
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.currentTarget.value);
  }

  // Using luxon for time math then organizing for display
  const DifferenceDisplayer = () => {
    const dl1 = daylight1.toString();
    const dl2 = daylight2.toString();
    const d1 = DateTime.fromISO(dl1)
    const d2 = DateTime.fromISO(dl2)

    if (daylight1 > daylight2) {
      const difference = d1.diff(d2, ['hours', 'minutes', 'seconds']).toFormat('hh:mm:ss')
      return <div>{city1} has {difference} more daylight than {city2}.</div>
    } else {
      const difference = d2.diff(d1, ['hours', 'minutes', 'seconds']).toFormat('hh:mm:ss')
      return <div>{city2} has {difference} more daylight than {city1}.</div>
    }
  }

  // Waiting for state to update
  useEffect(() => {
    if (daylight1 && daylight2) {
      DifferenceDisplayer()
    }
  }, [daylight1, daylight2, locationData])

  return (
    <div className="daylight-body">
      <div>
        <label>
          Enter a date (yyyy-mm-dd) <input
            className="city-search-input mb-4"
            onChange={handleDateChange}
            value={date}
            placeholder="YYYY-MM-DD"
          />
        </label>
      </div>
      <div>
        <h3>City name for location 1</h3>
        <CityToCoords displayData={dataSetter} cityNumber={1} date={date} />
      </div>
      <div className="mt-4">
        <h3>City name for location 2</h3>
        <CityToCoords displayData={dataSetter} cityNumber={2} date={date} />
      </div>
      {(daylight1 && daylight2)
        ?
        <div className="py-3 bg-light"><DifferenceDisplayer /></div>
        : null}
    </div>
  )
};
export default Differentiator;