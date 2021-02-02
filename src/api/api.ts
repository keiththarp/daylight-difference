import React from 'react';
import axios from 'axios'


// Take in city name and return possible matches then deliver coordinates
const findCoords = (searchTerm: string) => {
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${searchTerm}&key=${process.env.REACT_APP_COORDS_API_PW}`;
  return axios.get(apiUrl);
};

// Use coordinates from OpenCage to deliver daylight time for chosen location
const callSunTimes = (lat: number, lng: number, date: string) => {
  const apiUrl = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${date}`;
  return axios.get(apiUrl);
}

export {
  findCoords,
  callSunTimes
};
