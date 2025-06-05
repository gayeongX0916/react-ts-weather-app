import "./App.css";
import SearchSection from "./components/SearchSection";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import fetchWeather from "./api/fetchWeather";
import { useEffect } from "react";

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((postion) => {
      const lat = postion.coords.latitude;
      const lon = postion.coords.longitude;
      fetchWeather(lat, lon);
    });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);
  return (
    <div className="weather-app">
      <SearchSection />
      <CurrentWeather />
      <WeatherDetails />
    </div>
  );
}

export default App;
