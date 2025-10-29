// src/App.js (ĐÃ CHỈNH SỬA)
import React, { useState } from 'react';
import './App.css';
import ProfileBox from './ProfileBox';
import Weather from './Weather';
import Exchange from './Exchange';

const BOXES = {
  PROFILE: 'khung1',
  WEATHER: 'khung2',
  EXCHANGE: 'khung3',
  NONE: null,
};

function App() {
  const [activeBox, setActiveBox] = useState(BOXES.NONE);
  
  const handleSetAppBg = (bg) => {
    document.body.style.setProperty("--bg-color", bg);
  };

  const showBox = (boxName) => {
    setActiveBox(boxName);
    if (boxName !== BOXES.WEATHER) {
      handleSetAppBg("linear-gradient(135deg, #e0f2fe, #c7d2fe)");
    }
  };

  const hideAllBoxes = () => {
    setActiveBox(BOXES.NONE);
    handleSetAppBg("linear-gradient(135deg, #e0f2fe, #c7d2fe)");
  };
  
  return (
    <div className="App"> 
      
      {/* 🌟 CONTAINER CHÍNH CHO BỐ CỤC 2 CỘT TRÊN DESKTOP */}
      <div className="dashboard-container">
        
        {/* CỘT BÊN TRÁI: Profile và Menu (Sidebar) */}
        <div className="sidebar">
          {/* Thông tin cá nhân */}
          <div className="card profile">
            <img src="avarta.jpg" alt="avatar" /> 
            <div>
              <h1>Nguyễn Quốc Đạt</h1>
              <p>MSSV: 22130032</p>
            </div>
          </div>

          {/* Menu chính */}
          <div className="card menu">
            <button id="btnProfile" onClick={() => showBox(BOXES.PROFILE)}>
              <img src="Thongtin.jpg" alt="Thông tin" /> 
            </button>
            <button id="btnWeather" onClick={() => showBox(BOXES.WEATHER)}>
              <img src="Thoitiet.png" alt="Thời tiết" />
            </button>
            <button id="btnExchange" onClick={() => showBox(BOXES.EXCHANGE)}>
              <img src="Chuyendoi.png" alt="Chuyển đổi" />
            </button>
            <button id="btnClose" onClick={hideAllBoxes}>
              <img src="tat.png" alt="Đóng tất cả" />
            </button>
          </div>
        </div>
        {/* KẾT THÚC SIDEBAR */}
        
        {/* CỘT BÊN PHẢI: Khu vực Hiển thị Nội dung (Content Area) */}
        <div className="content-area">
          {/* Khung được hiển thị */}
          {activeBox === BOXES.PROFILE && <ProfileBox />}
          {activeBox === BOXES.WEATHER && <Weather setAppBg={handleSetAppBg} />}
          {activeBox === BOXES.EXCHANGE && <Exchange />}
        </div>
        {/* KẾT THÚC CONTENT AREA */}
      </div>
    </div>
  );
}

export default App;