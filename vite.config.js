import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log(process.env.NODE_ENV)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? "/live-17-okt/" : "/",
  // server: {
  //   host: "0.0.0.0",
  //   port: 5173
  // }
})
