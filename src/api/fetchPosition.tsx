const fetchPosition = async (value: string) => {
  const URL = `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=1&appid=147fc8bbc519a8fa39b988a1d6f95782
`;

  return fetch(URL).then((res) => {
    if (!res.ok) {
      throw new Error(`${Error}`);
    }
    return res.json();
  });
};

export default fetchPosition;
