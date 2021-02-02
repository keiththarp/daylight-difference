import React from 'react';
import './components.css'

export default function AppHeader(): JSX.Element {
  return (
    <div>
      <div className="daylight-header">
        <h1>Daylight Difference Determiner</h1>
      </div>
      <h4 className="mt-2 mb-3 text-light">Calculate the difference in daylight time between two locations.</h4>
    </div>
  )
};