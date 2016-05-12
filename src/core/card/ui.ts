'use strict'

import Card from './model'
import Event from '../../utils/events';

const render = (card: Card) => {

    const cardUi = document.createElement('div')
    cardUi.className = 'card'
    cardUi.innerText += card.title
    cardUi.innerHTML += '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>'
    const icon = document.getElementsByClassName('fa-pencil-square-o')[0] as HTMLElement
    icon.onclick = () => {
        const editCard = document.createElement('div')
        const cardarea = document.createElement('textarea')
        cardarea.className = 'cardarea'
        cardarea.setAttribute('rows', '3')
        cardarea.value = card.title
        var save = document.createElement('button')
        save.className = 'save'
        save.innerText = 'Save'
        editCard.appendChild(cardarea)
        editCard.appendChild(save)
        cardUi.parentElement.replaceChild(editCard, cardUi)
        save.onclick = () => {
            card.title = cardarea.value
            Event.rerender()
        }
    }

    return cardUi
}

export default render
