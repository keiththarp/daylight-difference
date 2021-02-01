import React from 'react';
import axios from 'axios'


// Take in city name and return possible matches containing coordinates
const findCoords = (searchTerm: string) => {
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${searchTerm}&key=${process.env.REACT_APP_COORDS_API_PW}`;
  return axios.get(apiUrl);
};

const callSunTimes = (lat: number, lng: number) => {
  const apiUrl = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`;
  return axios.get(apiUrl);
}

export {
  findCoords,
  callSunTimes
};