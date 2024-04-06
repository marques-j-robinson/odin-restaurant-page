import {generatedText} from './text.js'
import imgSrc from './home.jpg'

const creditHTML = 'Photo by <a href="https://unsplash.com/@ninjason?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jason Leung</a> on <a href="https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>'

export const createImg = () => {
    const el = document.createElement('div')
    el.classList.add('page-img')

    const img = new Image()
    img.src = imgSrc
    el.append(img)

    const credit = document.createElement('p')
    credit.classList.add('page-img__credit')
    credit.innerHTML = creditHTML
    el.append(credit)

    return el
}

export const createContent = () => {
    const el = document.createElement('div')
    el.classList.add('content')

    const title = document.createElement('h3')
    title.innerText = 'Home'
    el.append(title)

    const content = document.createElement('p')
    content.innerText = generatedText
    el.append(content)

    return el
}
