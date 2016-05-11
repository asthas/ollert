'use strict'

import Card from './model'

const render = (card: Card) => {
    var save = document.createElement('button')
    save.innerText = 'Save'
    const cardUi = document.createElement('div')
    cardUi.className = 'card'
    cardUi.innerText = card.title
    cardUi.onclick = function(){
        const editCard = document.createElement('div')
        this.contentEditable = true
        editCard.appendChild(save)
    }
    return cardUi
}

export default render
