import React from "react";

function TopButtons({setQuery}) {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Sydney",
    },
    {
      id: 3,
      title: "Tokio",
    },
    {
      id: 4,
      title: "Toronto",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];
  return (
    <div className="flex item-cernter justify-around my-6">
      {cities.map((city) => (
        <button  key={city.id} className="text-white text-sm sm:text-lg font-normal sm:font-medium  " onClick={()=> setQuery({q: city.title})}>
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
