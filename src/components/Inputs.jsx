import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  const handleUnitChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className="flex flex-row justify-center my-6">
      <form
        onSubmit={handleSearchClick}
        className="flex flex-row w-3/4 items-center justify-center space-x-2 sm:space-x-4"
      >
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          autoFocus
          className="text-base sm:text-xl font-light p-2 focus:outline-none w-full  shadow-xl capitalize placeholder:lowercase"
          placeholder="Search for city..."
        />
        <button className="text-white cursor-pointer transition ease-out hover:scale-125">
          <UilSearch size={20} />
        </button>
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </form>

      <div className="flex felx-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light hover:scale-125 transition  ease-out"
          onClick={handleUnitChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light hover:scale-125 transition  ease-out"
          onClick={handleUnitChange}
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
