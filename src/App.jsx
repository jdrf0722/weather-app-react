import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import Forecast from './components/Forecast'

function App() {
  return (
    <>
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from bg-cyan-700 to to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButtons />
        <Inputs />
        
        <TimeAndLocation />
        <TemperatureAndDetails />
        <Forecast title={"hourly forecast"}/>
        <Forecast title={"daily forecast"}/>
      </div>
    </>
  );
}

export default App;
