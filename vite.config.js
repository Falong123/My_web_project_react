// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Tên repo GitHub của bạn là My_web_project_react
const base = '/My_web_project_react/'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ⬅️ THÊM CẤU HÌNH BASE VÀO ĐÂY 
  base: base,
  // ➡️ CHO GITHUB PAGES
})