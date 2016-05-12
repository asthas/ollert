'use strict'

import Card from './model'
import Event from '../../utils/events'

const render = (card: Card) => {

    const cardUi = document.createElement('div')
    cardUi.className = 'card'
    cardUi.innerText += card.title

    const editicon = document.createElement('i')
    editicon.className = 'fa fa-pencil-square-o'
    editicon.setAttribute('aria-hidden', 'true')

    const delicon = document.createElement('i')
    delicon.className = 'fa fa-trash-o'
    delicon.setAttribute('aria-hidden', 'true')

    cardUi.appendChild(editicon)
    cardUi.appendChild(delicon)

    editicon.onclick = () => {
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

    delicon.onclick = () => Event.delCard(card.id)

    return cardUi
}

export default render
