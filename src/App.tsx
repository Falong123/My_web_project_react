// src/App.tsx

import React from 'react';
import ProfileCard from './ProfileCard'; // Import component vừa tạo
import './App.css'; // Đảm bảo import file CSS

const App: React.FC = () => {
  return (
    <div className="App">
      <ProfileCard />
      {/* Bạn có thể thêm các component khác ở đây */}
    </div>
  );
};

export default App;