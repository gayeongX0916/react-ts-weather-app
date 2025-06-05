import "./App.css";
import SearchSection from "./components/SearchSection";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import fetchWeather from "./api/fetchWeather";
import { useEffect, useState } from "react";
import type { WeatherKey } from "./types/WeatherKey";
import fetchPosition from "./api/fetchPosition";

function App() {
  const [value, setValue] = useState("");
  const [currentTemp, setCurrentTemp] = useState("0℃");
  const [currentCity, setCurrentCity] = useState("현재 위치");
  const [icon, setIcon] = useState("");
  const [weatherValues, setWeatherValues] = useState<
    Record<WeatherKey, string>
  >({
    rain: "0 mm/h",
    highTemp: "0℃",
    lowTemp: "0℃",
    feelsLike: "0℃",
    wind: "0 m/s",
    humidity: "0%",
  });

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((postion) => {
      const lat = postion.coords.latitude;
      const lon = postion.coords.longitude;
      fetchWeather(lat, lon).then((data) => {
        setWeatherValues({
          rain: `${data.rain ? data.rain : 0} mm/h`,
          highTemp: `${(data.main.temp_max - 273.15).toFixed(1)} ℃`,
          lowTemp: `${(data.main.temp_min - 273.15).toFixed(1)} ℃`,
          feelsLike: `${(data.main.feels_like - 273.15).toFixed(1)} ℃`,
          wind: `${data.wind.speed} m/s`,
          humidity: `${data.main.humidity} %`,
        });
        setCurrentTemp(`${(data.main.temp - 273.15).toFixed(1)} ℃`);
        setCurrentCity(data.name);
        setIcon(data.weather[0].icon);
      });
    });
  };

  const handleSearch = (value: string) => {
    fetchPosition(value).then((data) => {
      const lat = data[0].lat;
      const lon = data[0].lon;
      fetchWeather(lat, lon).then((data) => {
        console.log(data);
        setWeatherValues({
          rain: `${data.rain ? data.rain : 0} mm/h`,
          highTemp: `${(data.main.temp_max - 273.15).toFixed(1)} ℃`,
          lowTemp: `${(data.main.temp_min - 273.15).toFixed(1)} ℃`,
          feelsLike: `${(data.main.feels_like - 273.15).toFixed(1)} ℃`,
          wind: `${data.wind.speed} m/s`,
          humidity: `${data.main.humidity} %`,
        });
        setCurrentTemp(`${(data.main.temp - 273.15).toFixed(1)} ℃`);
        setCurrentCity(data.name);
        setIcon(data.weather[0].icon);
      });
    });
    setValue("");
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className="weather-app">
      <SearchSection
        value={value}
        setValue={setValue}
        onSearch={handleSearch}
      />
      <CurrentWeather currentTemp={currentTemp} currentCity={currentCity} icon={icon}/>
      <WeatherDetails weatherValues={weatherValues} />
    </div>
  );
}

export default App;
