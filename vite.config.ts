import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/yidai_website/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true, // 自动打开浏览器
  },
  build: {
    outDir: 'dist', // 输出目录
    sourcemap: true, // 构建后是否生成 source map 文件
    chunkSizeWarningLimit: 1500, // 块大小警告的限制（以 kbs 为单位）
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimizeDeps: {
    include: ['i18next', 'react-i18next']
  }
});
