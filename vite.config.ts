import { resolve } from 'path'
import { defineConfig } from 'vite'
import postcssNested from 'postcss-nested'
import postcssHexrgba from 'postcss-hexrgba'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        postcssNested,
        postcssHexrgba,
      ],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
})
