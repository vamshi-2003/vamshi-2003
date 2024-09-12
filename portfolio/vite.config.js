import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/vamshi-2003/portfolio/',  // Set the correct base URL
  plugins: [react()],
})
