//створюємо елемент з зазначеною передачею данних

export const createElement = (tag, className, text) => {
    const elem = document.createElement(tag)

    if (className) {
        elem.className = className
    }

    if (text) {
        elem.innerHTML = text
    }

    return elem
}

const HEADER_BUTTON_LIST = [
    {
        width: 24,
        height: 24,
        src: '/svg/header_back.svg',
    },
    {
        width: 24,
        height: 24,
        src: '/img/header_avatar.png',
    },
]

export const createHeader = () => {
    const header = createElement('header', 'header')

    HEADER_BUTTON_LIST.forEach((params) => { //params = width, height, src
        const button = createElement('button', 'button') //build button with params

        const img = createElement('img')

        Object.entries(params).forEach(([key, value]) => {
            img[key] = value
        })  // array from key(width) and value(24px)

        button.insertAdjacentElement('beforeend',img) //add img

        header.insertAdjacentElement('beforeend', button) // add img to button in the header
    })

    return header
}

