import { createApp } from "vue"
import App from './vue/App.vue';
import axios from 'axios';

import { sum } from "./js/es"
import { min } from "./js/comjs"


import "./js/divEl"
if(module.hot) {
  module.hot.accept("./js/divEl.js", () => {
    console.log('divEl 模块发生更新...');
  })
}
import "../test.css"

console.log(sum(1, 1))
console.log(min(1, 1))
// const app = createApp({
  // template: `#my-app`,
  // data() {
  //   return {
  //     title: "hello",
  //   }
  // },
// })

const app = createApp(App)

app.mount("#app")

axios.get("/api/moment")
  .then(res => console.log(res))