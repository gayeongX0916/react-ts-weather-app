const fetchWeather = async (lat: number, lon: number) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=147fc8bbc519a8fa39b988a1d6f95782`;

  return fetch(URL).then((res) => {
    if (!res.ok) {
      throw new Error(`${Error}`);
    }
    console.log(res.json());
    // return res.json();
  });
};

export default fetchWeather;
