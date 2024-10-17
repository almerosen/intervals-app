import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

console.log(process.env.NODE_ENV)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? "/intervals-app/" : "/",
  // server: {
  //   host: "0.0.0.0",
  //   port: 5173
  // }
})
