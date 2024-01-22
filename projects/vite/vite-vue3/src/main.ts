import { createApp } from 'vue'
import './assets/styles/style.css'
import App from './App.vue'
import sum from "virtual:calc"

console.log('%c------>[LOG:]', 'color: fuchsia', sum([1,3,5,7,9]))
createApp(App).mount('#app')
