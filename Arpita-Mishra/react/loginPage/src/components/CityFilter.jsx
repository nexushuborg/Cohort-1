import React from "react";

function CityFilter({ selectedCity, setSelectedCity }) {
  const cities = [
    "All Cities",
    "Mumbai",
    "Chennai",
    "Bangalore",
    "Hyderabad",
    "Kolkata",
    "Jaipur",
    "Ahmedabad",
  ];

  return (
    <div>
      {cities.map((city, index) => (
        <button key={index} onClick={() => setSelectedCity(city)}>
          {city}
        </button>
      ))}
    </div>
  );
}

export default CityFilter;