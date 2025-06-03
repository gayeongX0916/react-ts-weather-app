import "./App.css";
import searchImg from "./assets/search.svg";
import rainImg from "./assets/rain.png";
import highTemperatureImg from "./assets/high-temperature.png";
import lowTemperatureImg from "./assets/low-temperature.png";
import peopleImg from "./assets/people.png";
import windImg from "./assets/wind.png";
import humidImg from "./assets/humid.png";

function App() {
  return (
    <div className="weather-app">
      <div className="search-section">
        <input placeholder="도시를 입력하세요." type="search" />
        <button>
          <img src={searchImg} alt="검색" width={20} height={20}/>
        </button>
      </div>
      <div className="current-section">
        <div>이미지</div>
        <h3>현재 온도</h3>
        <div>현재 지역</div>
      </div>
      <div className="detail-section">
        <div className="detail-section-card">
          <img src={rainImg} alt="강우량" width={48} height={48} />
          <span className="label">강우량</span>
          <span className="value">3.16 mm/h</span>
        </div>
        <div className="detail-section-card">
          <img src={highTemperatureImg} alt="최고온도" width={48} height={48} />
          <span className="label">최고온도</span>
          <span className="value">3.16 mm/h</span>
        </div>
        <div className="detail-section-card">
          <img src={lowTemperatureImg} alt="최저온도" width={48} height={48} />
          <span className="label">최저온도</span>
          <span className="value">3.16 mm/h</span>
        </div>
        <div className="detail-section-card">
          <img src={peopleImg} alt="체감온도" width={48} height={48} />
          <span className="label">체감온도</span>
          <span className="value">3.16 mm/h</span>
        </div>
        <div className="detail-section-card">
          <img src={windImg} alt="풍속" width={48} height={48} />
          <span className="label">풍속</span>
          <span className="value">3.16 mm/h</span>
        </div>
        <div className="detail-section-card">
          <img src={humidImg} alt="습도" width={48} height={48} />
          <span className="label">습도</span>
          <span className="value">3.16 mm/h</span>
        </div>
      </div>
    </div>
  );
}

export default App;
