import React from 'react';
import './components.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export default function Menu(): JSX.Element {
  return (
    <div className="d-flex mx-4 justify-content-around">
      <div className="text-light">Daylight Difference Determiner</div>
      <div>
        <Link to='/'>
          <FontAwesomeIcon className="text-light" icon={faHome} />
        </Link>
      </div>
      <div>
        <Link to='/about'>
          <FontAwesomeIcon className="text-light" icon={faInfoCircle} />
        </Link>
      </div>
    </div>
  )
};