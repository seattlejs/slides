import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    document.title = 'Slides';
  })

  return (
    <div className='page'>
      <h1 className='home-title'>Seattle JS Event Slides</h1>
      <h3 className='home-subtitle'>Events:</h3>
      <Link className='home-link' to='/slides/monthly-meetup'>
        Monthly Meetup
      </Link>
      <Link className='home-link' to='/slides/code-katas'>
        Code Katas
      </Link>
      <Link className='home-link' to='/slides/virtual-coffee'>
        Virtual Coffee
      </Link>
      <Link className='home-link' to='/slides/special-event'>
        Special Event
      </Link>
    </div>
  );
}

export default Home;
