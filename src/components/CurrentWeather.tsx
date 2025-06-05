type CurretWeather = {
  currentTemp: string;
  currentCity: string;
  icon: string;
};

const CurrentWeather = ({ currentTemp, currentCity, icon }: CurretWeather) => {
  return (
    <div className="current-section">
      {icon && (
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="현재 날씨"
          width={60}
          height={60}
        />
      )}
      <h3>{currentTemp}</h3>
      <div>{currentCity}</div>
    </div>
  );
};

export default CurrentWeather;
