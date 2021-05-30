import { createApp } from 'vue'
import App from './App'
import router from './router'
import fs from 'fs'

import { ipcRenderer } from 'electron'
import Store from 'electron-store'

// Will be generate in development mode
// const { ipcRenderer } = require("electron")
// const Store = require("electron-store")

import 'ant-design-vue/dist/antd.css'
import '@/assets/style/boot4-part.less'
import './index.less'

console.log('fs', fs)
console.log('ipcRenderer:', ipcRenderer)
console.log('electron-store', new Store())

createApp(App)
  .use(router)
  .mount('#app')
  .$nextTick(window.ClosePreloadLoading)
