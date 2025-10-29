import React, { useState, useEffect } from 'react';

const Exchange = () => {
  const [rate, setRate] = useState('Đang tải...');
  const [updateTime, setUpdateTime] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchRate = async () => {
    setRate("Đang cập nhật...");
    setUpdateTime('');
    setLoading(true);

    try {
      const res = await fetch("https://api.exchangerate.host/latest?base=USD&symbols=VND");
      const data = await res.json();
      const newRate = data.rates.VND;
      const now = new Date().toLocaleString("vi-VN");

      setRate(`1 USD = ${newRate.toLocaleString("vi-VN")} VND`);
      setUpdateTime(`Cập nhật: ${now}`);
    } catch (error) {
      setRate("Lỗi khi lấy dữ liệu!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRate();
  }, []);

  return (
    <div id="khung3" className="card fade-box">
      <div className="widget">
        <h2>💵 Tỷ giá USD → 🇻🇳 VND</h2>
        <div id="rate" className={loading ? "loading" : ""}>{rate}</div>
        <div id="updateTime">{updateTime}</div>
        <button id="reloadRate" onClick={fetchRate} disabled={loading}>
          {loading ? 'Đang tải...' : '🔄 Làm mới'}
        </button>
      </div>
    </div>
  );
};

export default Exchange;