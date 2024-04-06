const generatedText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam quis enim lobortis scelerisque fermentum. Pretium viverra suspendisse potenti nullam. Interdum consectetur libero id faucibus nisl tincidunt. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Ac turpis egestas integer eget aliquet nibh praesent. Tristique risus nec feugiat in fermentum posuere urna nec. Morbi tempus iaculis urna id volutpat. Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse. Suscipit tellus mauris a diam maecenas sed enim. Phasellus egestas tellus rutrum tellus. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. At tempor commodo ullamcorper a lacus vestibulum sed arcu non. Maecenas accumsan lacus vel facilisis volutpat. Elementum integer enim neque volutpat ac tincidunt vitae semper. Porta lorem mollis aliquam ut porttitor leo a. Pharetra diam sit amet nisl. Arcu dui vivamus arcu felis.'

const createImg = ({imgSrc, creditHTML}) => {
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

const createContent = ({title: pageTitle}) => {
    const el = document.createElement('div')
    el.classList.add('content')

    const title = document.createElement('h3')
    title.innerText = pageTitle
    el.append(title)

    const content = document.createElement('p')
    content.innerText = generatedText
    el.append(content)

    return el
}

export const render = (pageInfo, rootEl) => {
    rootEl.innerHTML = ''
    rootEl.append(createContent(pageInfo))
    rootEl.append(createImg(pageInfo))
}
