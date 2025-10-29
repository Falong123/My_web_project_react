import React, { useState } from 'react';
import ProfileCard from './components/ProfileCard.jsx';
import ProfileDetail from './components/ProfileDetail.jsx';
import WeatherWidget from './components/WeatherWidget.jsx';
import ExchangeWidget from './components/ExchangeWidget.jsx';

const App = () => {
  // Trạng thái quản lý khung nào đang hiển thị (1: Profile, 2: Weather, 3: Exchange)
  const [activeBox, setActiveBox] = useState(null);

  const showBox = (boxId) => {
    // Nếu click vào khung đang mở, thì đóng nó (toggle)
    if (activeBox === boxId) {
        setActiveBox(null);
    } else {
        setActiveBox(boxId);
    }
  };

  const hideAllBoxes = () => {
    setActiveBox(null);
    // Reset background color về mặc định khi đóng (Quan trọng cho tính năng thời tiết)
    document.body.style.setProperty("--bg-color", 'linear-gradient(135deg, #e0f2fe, #c7d2fe)');
  };

  return (
    <div className="dashboard-container">
      {/* 1. Thẻ Profile chính và Menu */}
      <ProfileCard showBox={showBox} hideAllBoxes={hideAllBoxes} />

      {/* 2. Các Khung Chức năng */}
      
      {/* Khung 1: Profile Detail */}
      <div id="khung1" className={`card box-content ${activeBox === 1 ? 'fade-box' : 'box-hidden'}`}>
        <ProfileDetail />
      </div>

      {/* Khung 2: Thời tiết */}
      <div id="khung2" className={`card box-content ${activeBox === 2 ? 'fade-box' : 'box-hidden'}`}>
        <WeatherWidget />
      </div>
      
      {/* Khung 3: Tỷ giá */}
      <div id="khung3" className={`card widget ${activeBox === 3 ? 'fade-box' : 'box-hidden'}`}>
        <ExchangeWidget />
      </div>
    </div>
  );
};

export default App;