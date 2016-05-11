'use strict'

import Card from './model'

const render = (card: Card) => {
    const cardUi = document.createElement('div')
    cardUi.className = 'card'
    cardUi.innerText = card.title
    return cardUi
}

export default render
