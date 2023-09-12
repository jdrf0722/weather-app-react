import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);


  const formatBackground = () => {
    if (!weather) return 'bg-cyan-700 to to-blue-700'
    const threshold = units === 'metric' ? 20 : 60;
    if (weather.temp <= threshold) return 'bg-cyan-700 to to-blue-700'

    return 'from-yellow-700 to-orange-700'
  }

  return (
    <>
      <div className={`mx-auto max-w-screen-md mt-4 py-5 px-5 sm:px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />

            <Forecast key={1} title={"hourly forecast"} items={weather.hourly} />
            <Forecast key={2} title={"daily forecast"} items={weather.daily} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
