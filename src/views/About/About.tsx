import React from 'react';
import AppHeader from '../../components/AppHeader';
import Menu from '../../components/Menu'


function About(): JSX.Element {


  return (

    <div>
      <AppHeader />
      <div className="about-screen">
        <p>
          I built this app the winter of 2020/21 while hiding from COVID-19, tucked away in a quiet house in the woods near Acadia National Park.
          The super short winter days had me wondering how much sunlight we were missing out on compared to friends and family several hours to the south of us.
        </p>
        <p>
          <h4>Technologies:</h4>
          <ul>
            <li>React</li>
            <li>BootStrap</li>
            <li>TypeScript</li>
            <li>Axios</li>
            <li>Luxon</li>
          </ul>
        </p>
        <p>
          <h4>APIs:</h4>
          <ul>
            <li><a href="https://opencagedata.com/api">OpenCage Geocoding</a> used to populate the location search and Lat/Long data.</li>
            <li><a href="https://sunrise-sunset.org/api">Sunrise Sunset API</a> Provides sunrise/set times, but conveniently enough also provides day length data, eliminating a math step.</li>
          </ul>
        </p>
      </div>
      <Menu />
    </div>

  )

};
export default About;