'use strict'

import Card from './model'

const render = (card: Card) => {
    const cardUi = document.createElement('div')
    cardUi.className = 'card'
    cardUi.innerText = card.title
    return cardUi
}

export const addNewCard = (e) => {
    const cardarea = document.createElement('textarea')
    cardarea.setAttribute("rows", "3")
    return cardarea
}

export default render
