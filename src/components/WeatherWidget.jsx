import React, { useState } from 'react';

// Dữ liệu ánh xạ mã thời tiết (Giữ nguyên từ code.js)
const weatherMap = {
  0: ["Trời quang đãng", "☀️", "linear-gradient(135deg,#fef9c3,#fde68a)"],
  1: ["Trời hầu như quang", "🌤️", "linear-gradient(135deg,#fef9c3,#a7f3d0)"],
  2: ["Có mây rải rác", "⛅", "linear-gradient(135deg,#c7d2fe,#f3e8ff)"],
  3: ["U ám", "☁️", "linear-gradient(135deg,#cbd5e1,#94a3b8)"],
  45: ["Sương mù", "🌫️", "linear-gradient(135deg,#e2e8f0,#cbd5e1)"],
  48: ["Sương giá", "🌫️❄️", "linear-gradient(135deg,#e0f2fe,#cbd5e1)"],
  51: ["Mưa phùn nhẹ", "🌦️", "linear-gradient(135deg,#bae6fd,#93c5fd)"],
  61: ["Mưa nhẹ", "🌧️", "linear-gradient(135deg,#93c5fd,#60a5fa)"],
  63: ["Mưa vừa", "🌧️🌧️", "linear-gradient(135deg,#60a5fa,#3b82f6)"],
  65: ["Mưa to", "⛈️", "linear-gradient(135deg,#a5b4fc,#60a5fa)"],
  71: ["Tuyết rơi nhẹ", "🌨️", "linear-gradient(135deg,#e0f2fe,#f0f9ff)"],
  75: ["Tuyết rơi dày", "❄️", "linear-gradient(135deg,#f0f9ff,#e2e8f0)"],
  95: ["Dông nhẹ", "⛈️", "linear-gradient(135deg,#c7d2fe,#a5b4fc)"],
  99: ["Dông mạnh, mưa lớn", "🌩️", "linear-gradient(135deg,#818cf8,#5b21b6)"]
};

const WeatherWidget = () => {
  const [cityInput, setCityInput] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const checkWeather = async () => {
    if (!cityInput.trim()) return alert("Vui lòng nhập tên thành phố!");
    setIsLoading(true);
    setWeatherData(null);

    try {
      // 1️⃣ Lấy tọa độ thành phố
      const geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${cityInput}&count=1&language=vi&format=json`;
      const geoRes = await fetch(geoURL);
      const geoData = await geoRes.json();

      if (!geoData.results) return alert("Không tìm thấy thành phố!");
      const { latitude, longitude, name, country } = geoData.results[0];

      // 2️⃣ Lấy dữ liệu thời tiết hiện tại
      const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
      const weatherRes = await fetch(weatherURL);
      const weatherDataRes = await weatherRes.json();
      
      const { temperature, weathercode } = weatherDataRes.current_weather;
      
      // 3️⃣ Xử lý dữ liệu
      const [descText, iconEmoji, bg] = weatherMap[weathercode] || ["Không xác định", "❓", "linear-gradient(135deg,#e0f2fe,#c7d2fe)"];
      
      // Cập nhật nền trang web (Dùng CSS Variable --bg-color)
      document.body.style.setProperty("--bg-color", bg);

      setWeatherData({
        place: `${name}, ${country}`,
        temp: `${temperature}°C`,
        desc: `${iconEmoji} ${descText}`,
        icon: iconEmoji
      });

    } catch (err) {
      alert("Không thể lấy dữ liệu thời tiết! Vui lòng thử lại.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="weather-section">
      <h2>🌦️ Thời tiết</h2>
      <div className="weather-input">
        <input 
          type="text" 
          placeholder="Nhập tên thành phố..." 
          value={cityInput}
          onChange={(e) => setCityInput(e.target.value)}
        />
        <button onClick={checkWeather} disabled={isLoading}>
          {isLoading ? 'Đang tải...' : 'Xem'}
        </button>
      </div>

      {/* Hiển thị box thời tiết chỉ khi có dữ liệu */}
      {weatherData && (
        <div id="weatherBox" className="weather-box fade-box">
          <div style={{ fontSize: '64px' }}>{weatherData.icon}</div>
          <div className="weather-info">
            <h3 id="place">{weatherData.place}</h3>
            <p id="temp">{weatherData.temp}</p>
            <p id="desc">{weatherData.desc}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default WeatherWidget;