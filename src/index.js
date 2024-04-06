// Home
// Photo by <a href="https://unsplash.com/@ninjason?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jason Leung</a> on <a href="https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
//
// Menu
// Photo by <a href="https://unsplash.com/@jonathanborba?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jonathan Borba</a> on <a href="https://unsplash.com/photos/person-slicing-vegetable-uB7q7aipU2o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
//
// About
// Photo by <a href="https://unsplash.com/@shootdelicious?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Eiliv Aceron</a> on <a href="https://unsplash.com/photos/a-man-cooking-food-in-a-kitchen-wNQoaYCFcsI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

import './style.css'
import HomeImg from './home.jpg'

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quis enim lobortis scelerisque fermentum. Pretium viverra suspendisse potenti nullam. Interdum consectetur libero id faucibus nisl tincidunt. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Ac turpis egestas integer eget aliquet nibh praesent. Tristique risus nec feugiat in fermentum posuere urna nec. Morbi tempus iaculis urna id volutpat. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Suscipit tellus mauris a diam maecenas sed enim. Phasellus egestas tellus rutrum tellus. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Maecenas accumsan lacus vel facilisis volutpat. Elementum integer enim neque volutpat ac tincidunt vitae semper. Porta lorem mollis aliquam ut porttitor leo a. Pharetra diam sit amet nisl. Arcu dui vivamus arcu felis.'
const homeImgCredit = 'Photo by <a href="https://unsplash.com/@ninjason?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jason Leung</a> on <a href="https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'

const rootEl = document.querySelector('#root');

function createImgEl() {
    const el = document.createElement('div')
    el.classList.add('page-img')

    const img = new Image()
    img.src = HomeImg
    el.append(img)

    const credit = document.createElement('p')
    credit.classList.add('page-img__credit')
    credit.innerHTML = homeImgCredit
    el.append(credit)

    return el
}

function contentInfo() {
    const el = document.createElement('div')
    el.classList.add('content')

    const title = document.createElement('h3')
    title.innerText = 'Home'
    el.append(title)

    const content = document.createElement('p')
    content.innerText = text
    el.append(content)

    return el
}

rootEl.append(contentInfo())
rootEl.append(createImgEl())
