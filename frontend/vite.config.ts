import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     '@tanstack/react-query-devtools': '@tanstack/react-query-devtools/build/lib/index.js',
  //   },
  // },
});
