import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'
import type { Plugin } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-transform',
      apply: 'build',
      enforce: 'post',
      writeBundle: {
        handler() {
          const htmlFile = resolve(__dirname, 'dist/index.html')
          let html = readFileSync(htmlFile, 'utf-8')
          html = html.replace(/src="\/assets\//g, 'src="./assets/')
                     .replace(/href="\/assets\//g, 'href="./assets/')
          writeFileSync(htmlFile, html)
        }
      }
    } as Plugin
  ],
  base: './',
  build: {
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && /\.(png|jpe?g|svg|gif)$/i.test(assetInfo.name)) {
            return 'assets/images/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})
