import { defineConfig } from 'vite'
import tailwindcss from 'tailwindcss'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss()]
    }
  },
  plugins: [uni()]
})
