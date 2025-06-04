type weatherData = {
  imgSrc: string;
  alt: string;
  label: string;
  value: string;
};

const WeatherCard = ({ imgSrc, alt, label, value }: weatherData) => {
  return (
    <div className="detail-section-card">
      <img src={imgSrc} alt={alt} width={48} height={48} />
      <span className="label">{label}</span>
      <span className="value">{value}</span>
    </div>
  );
};

export default WeatherCard;
