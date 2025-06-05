import rainImg from "../assets/rain.png";
import highTemperatureImg from "../assets/high-temperature.png";
import lowTemperatureImg from "../assets/low-temperature.png";
import peopleImg from "../assets/people.png";
import windImg from "../assets/wind.png";
import humidImg from "../assets/humid.png";
import WeatherCard from "./WeatherCard";
import type { WeatherKey } from "../types/WeatherKey";

const weatherData: {
  key: WeatherKey;
  imgSrc: string;
  alt: string;
  label: string;
}[] = [
  { key: "rain", imgSrc: rainImg, alt: "강우량", label: "강우량" },
  {
    key: "highTemp",
    imgSrc: highTemperatureImg,
    alt: "최고온도",
    label: "최고온도",
  },
  {
    key: "lowTemp",
    imgSrc: lowTemperatureImg,
    alt: "최저온도",
    label: "최저온도",
  },
  { key: "feelsLike", imgSrc: peopleImg, alt: "체감온도", label: "체감온도" },
  { key: "wind", imgSrc: windImg, alt: "풍속", label: "풍속" },
  { key: "humidity", imgSrc: humidImg, alt: "습도", label: "습도" },
];

const WeatherDetails = ({ weatherValues }: any) => {
  return (
    <div className="detail-section">
      {weatherData.map(({ key, imgSrc, alt, label }) => (
        <WeatherCard
          key={key}
          imgSrc={imgSrc}
          alt={alt}
          label={label}
          value={weatherValues[key]}
        />
      ))}
    </div>
  );
};

export default WeatherDetails;
