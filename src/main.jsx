import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './App.css'; // Import CSS toàn cục

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      {/* Component App là gốc của toàn bộ giao diện Dashboard */}
      <App />
    </React.StrictMode>,
  );
} else {
  console.error('Không tìm thấy element có id "root" trong index.html.');
}