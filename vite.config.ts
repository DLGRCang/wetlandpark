import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path/posix");
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    //host: 'localhost',  // 指定服务器主机名
    port: 8080, // 指定服务器端口

  },
  css: {
    postcss:{
      plugins:[
          require('postcss-px2rem')({
            remUnit:192
          })
      ]
    }
  },
})


