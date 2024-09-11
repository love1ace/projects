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
                     .replace(/href="byul.png"/g, 'href="./public/byul.png"')
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
          if (assetInfo.name && (assetInfo.name.endsWith('.png') || assetInfo.name.endsWith('.jpg') || assetInfo.name.endsWith('.svg'))) {
            return 'public/[name][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
})
