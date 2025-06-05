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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateWeather = async (lat: number, lon: number) => {
    setLoading(true);
    setError(null);

    fetchWeather(lat, lon)
      .then((data) => {
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
      })
      .catch((e) => {
        console.error(e);
        setError("날씨 정보를 가져오는데 실패했습니다.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((postion) => {
      const { latitude, longitude } = postion.coords;
      updateWeather(latitude, longitude);
    });
  };

  const handleSearch = (value: string) => {
    fetchPosition(value)
      .then((data) => {
        const { lat, lon } = data[0];
        updateWeather(lat, lon);
      })
      .catch((e) => {
        console.error(e);
        setError("도시 정보를 찾을 수 없습니다.");
      })
      .finally(() => {
        setLoading(false);
        setValue("");
      });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  return (
    <div className="weather-app">
      {loading && <span>로딩 중...</span>}
      <SearchSection
        value={value}
        setValue={setValue}
        onSearch={handleSearch}
      />
      {error ? (
        <span>{error}</span>
      ) : (
        <>
          <CurrentWeather
            currentTemp={currentTemp}
            currentCity={currentCity}
            icon={icon}
          />
          <WeatherDetails weatherValues={weatherValues} />
        </>
      )}
    </div>
  );
}

export default App;
