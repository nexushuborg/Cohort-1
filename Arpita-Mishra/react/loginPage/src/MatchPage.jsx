import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import CityFilter from './components/CityFilter';

function Page() {
  return (
    <>
      <Navbar />
      
      <CityFilter />
      <Card />
    </>
  );
}

export default Page;