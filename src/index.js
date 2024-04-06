import './assets/style.css'
import {render} from './lib/page.js'
import {pageInfo as home} from './lib/home.js'
import {pageInfo as menu} from './lib/menu.js'
import {pageInfo as about} from './lib/about.js'

const rootEl = document.querySelector('#root');
render(home, rootEl)

const homeBtn = document.querySelector('#homeBtn')
homeBtn.addEventListener('click', () => render(home, rootEl))

const menuBtn = document.querySelector('#menuBtn')
menuBtn.addEventListener('click', () => render(menu, rootEl))

const aboutBtn = document.querySelector('#aboutBtn')
aboutBtn.addEventListener('click', () => render(about, rootEl))
