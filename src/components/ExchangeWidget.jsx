import React, { useState, useEffect, useCallback } from 'react';

const ExchangeWidget = () => {
  const [rateText, setRateText] = useState("Đang tải...");
  const [updateTime, setUpdateTime] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchRate = useCallback(async () => {
    setIsLoading(true);
    setRateText("Đang cập nhật...");
    setUpdateTime("");

    try {
      const res = await fetch("https://api.exchangerate.host/latest?base=USD&symbols=VND");
      const data = await res.json();
      const rate = data.rates.VND;
      const now = new Date().toLocaleString("vi-VN");

      setRateText(`1 USD = ${rate.toLocaleString("vi-VN")} VND`);
      setUpdateTime(`Cập nhật: ${now}`);
    } catch (error) {
      setRateText("Lỗi khi lấy dữ liệu!");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Tự động tải khi component được mount
  useEffect(() => {
    fetchRate();
  }, [fetchRate]);

  return (
    <div className="widget">
      <h2>💵 Tỷ giá USD → 🇻🇳 VND</h2>
      <div id="rate" className={isLoading ? "loading" : ""}>{rateText}</div>
      <div id="updateTime">{updateTime}</div>
      <button id="reloadRate" onClick={fetchRate}>🔄 Làm mới</button>
    </div>
  );
};

export default ExchangeWidget;