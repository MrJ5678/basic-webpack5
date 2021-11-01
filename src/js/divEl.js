import "../css/style.css"
import "../css/title.less"
import "../css/img.css"

import buildingsImg from "../img/buildings.jpeg"

const divEl = document.createElement("div")
divEl.className = "title"
divEl.innerHTML = "hello"

const bgImgDiv = document.createElement("div")
bgImgDiv.className = "img-bg"

const imgEl = document.createElement("img")
imgEl.src = buildingsImg

document.body.appendChild(divEl)
document.body.appendChild(bgImgDiv)
document.body.appendChild(imgEl)
