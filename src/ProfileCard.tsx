// src/ProfileCard.tsx

import React from 'react';
// Import hình ảnh của bạn (giả sử hình ảnh nằm trong src/assets/profile.jpg)
import profileImage from './assets/avarta.jpg'; // Thay thế bằng đường dẫn ảnh của bạn

// Định nghĩa Component Function
const ProfileCard: React.FC = () => {
  return (
    // Card Container
    <div className="profile-card-container">
      {/* Phần Thông tin Cá nhân */}
      <div className="info-section">
        <img
          src={profileImage}
          alt="Ảnh đại diện"
          className="profile-image"
        />
        <div className="text-info">
          <h2 className="name">Nguyễn Quốc Đạt</h2>
          <p className="msvv">MSSV: 22130032</p>
        </div>
      </div>

      {/* Phần Icons (Hành động) */}
      <div className="icon-section">
        {/* Giả lập các icon bằng placeholder div cho đơn giản */}
        <div className="icon-item">👤</div> 
        <div className="icon-item">☁️</div>
        <div className="icon-item">💲</div>
        <div className="icon-item icon-delete">❌</div>
      </div>
    </div>
  );
};

export default ProfileCard;