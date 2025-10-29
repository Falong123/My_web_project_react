import React from 'react';

const ProfileCard = ({ showBox, hideAllBoxes }) => {
  return (
    <>
      {/* Thông tin cá nhân (Sử dụng đường dẫn /avarta.jpg, giả sử file nằm trong thư mục public/) */}
      <div className="card profile">
        <img src="/avarta.jpg" alt="avatar" />
        <div>
          <h1>Nguyễn Quốc Đạt</h1>
          <p>MSSV: 22130032</p>
        </div>
      </div>

      {/* Menu chính */}
      <div className="card menu">
        <button onClick={() => showBox(1)}>
          <img src="/Thongtin.jpg" alt="Thông tin" />
        </button>
        <button onClick={() => showBox(2)}>
          <img src="/Thoitiet.png" alt="Thời tiết" />
        </button>
        <button onClick={() => showBox(3)}>
          <img src="/Chuyendoi.png" alt="Chuyển đổi" />
        </button>
        <button onClick={hideAllBoxes}>
          <img src="/tat.png" alt="Đóng tất cả" />
        </button>
      </div>
    </>
  );
};

export default ProfileCard;