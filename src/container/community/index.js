import { createElement, createHeader } from '../../script/layout'

const page = document.querySelector('.page')

//==

const header = createHeader()

page.append(header)


//==
const title = createElement('h1', 'title', 'Комʼюніті')

page.append(title)

// ===

const TABS = [
 
   { text: 'База знань', isActive: false },
      
   { text: 'Інформація', isActive: true },
   
]

const createTabs = () => {
    const tabs = createElement('div', 'tabs')

    TABS.forEach((elem) => {
        const tab = createElement(
            'button',
            elem.isActive ? 'tab__button active' : 'tab__button',
            elem.text,
        )
        tabs.append(tab)
    })
    return tabs
}

const tabs = createTabs()
page.append(tabs)


const createInfo = () => {
    const info = createElement ('div', 'info')
    const image = createElement('image', 'info__image' )
    image.src = '/img/for_social.png'

    const title = createElement(
        'h2',
        'info__title',
        'Що таке база знань?',
    )

    const text = createElement(
        'div',
        'info__description',
        'База знань - база даних, що містить правила виведення та інформацію про людський досвід і знання в деякій предметній галузі. У системах, що самонавчаються, база знань також містить інформацію, що є результатом вирішення попередніх завдань.',
    )

    const button = createElement(
        'button',
        'info__button',
        "Перейти до ком'юніті у Телеграм",
    )

    info.append(image)
    info.append(title)
    info.append(text)
    info.append(button)
    return info
}




// ===

const info = createInfo()
page.append(info)

// ===