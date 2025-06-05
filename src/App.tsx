import "./App.css";
import SearchSection from "./components/SearchSection";
import CurrentWeather from "./components/CurrentWeather";
import WeatherDetails from "./components/WeatherDetails";
import { useEffect, useState } from "react";
import fetchPosition from "./api/fetchPosition";
import useWeather from "./hooks/useWeather";

function App() {
  const [value, setValue] = useState("");
  const {
    currentTemp,
    currentCity,
    icon,
    weatherValues,
    updateWeather,
    loading,
    error,
    setError,
    setLoading,
  } = useWeather();

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
