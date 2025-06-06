import { useState } from "react";
import type { WeatherKey } from "../types/WeatherKey";
import fetchWeather from "../api/fetchWeather";

type WeatherData = {
  currentTemp: string;
  currentCity: string;
  icon: string;
  weatherValues: Record<WeatherKey, string>;
};

const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({
    currentTemp: "0℃",
    currentCity: "현재 위치",
    icon: "",
    weatherValues: {
      rain: "0 mm/h",
      highTemp: "0℃",
      lowTemp: "0℃",
      feelsLike: "0℃",
      wind: "0 m/s",
      humidity: "0%",
    },
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateWeather = async (lat: number, lon: number) => {
    fetchWeather(lat, lon)
      .then((data) => {
        setWeatherData({
          currentTemp: `${(data.main.temp - 273.15).toFixed(1)} ℃`,
          currentCity: data.name,
          icon: data.weather[0].icon,
          weatherValues: {
            rain: `${data.rain?.["1h"] ?? 0} mm/h`,
            highTemp: `${(data.main.temp_max - 273.15).toFixed(1)} ℃`,
            lowTemp: `${(data.main.temp_min - 273.15).toFixed(1)} ℃`,
            feelsLike: `${(data.main.feels_like - 273.15).toFixed(1)} ℃`,
            wind: `${data.wind.speed} m/s`,
            humidity: `${data.main.humidity} %`,
          },
        });
      })
      .catch((e) => {
        console.error(e);
        setError("날씨 정보를 가져오는데 실패했습니다.");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return {
    ...weatherData,
    loading,
    error,
    updateWeather,
    setError,
    setLoading,
  };
};

export default useWeather;
