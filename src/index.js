// Home
// Photo by <a href="https://unsplash.com/@ninjason?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jason Leung</a> on <a href="https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
//
// Menu
// Photo by <a href="https://unsplash.com/@jonathanborba?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jonathan Borba</a> on <a href="https://unsplash.com/photos/person-slicing-vegetable-uB7q7aipU2o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
//
// About
// Photo by <a href="https://unsplash.com/@shootdelicious?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Eiliv Aceron</a> on <a href="https://unsplash.com/photos/a-man-cooking-food-in-a-kitchen-wNQoaYCFcsI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

import './style.css'
import {createContent, createImg} from './home.js'

const rootEl = document.querySelector('#root');

rootEl.append(createContent())
rootEl.append(createImg())
