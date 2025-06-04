import "./App.css";
import SearchSection from "./components/SearchSection";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";

function App() {
  return (
    <div className="weather-app">
      <SearchSection />
      <CurrentWeather />
      <WeatherDetails />
    </div>
  );
}

export default App;
