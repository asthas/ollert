'use strict'

import CardList from './model'
import renderCard from '../card/ui'

const addNewCard = (cardList: CardList) => {
    const newCardDiv = document.createElement('div')

    const cardarea = document.createElement('textarea')
    cardarea.setAttribute('rows', '3')

    const done = document.createElement('button')
    done.innerText = 'Done'
    done.onclick = (e) => {
        if (cardarea.value !== '') {
            cardList.addCard(cardarea.value)
        }

        newCardDiv.removeChild(cardarea)
        newCardDiv.removeChild(done)

        console.log(cardList)
    }

    newCardDiv.appendChild(cardarea)
    newCardDiv.appendChild(done)

    return newCardDiv
}

const render = (cardList: CardList): HTMLElement => {
    const listContainer = document.createElement('div')
    listContainer.className = 'cardlist'

    const listTitle = document.createElement('h4')
    listTitle.innerText = cardList.title

    const list = cardList.cards.map(card => renderCard(card))

    const newcard = document.createElement('a')
    newcard.className = 'newcard'
    newcard.innerText = 'Add a new card'
    newcard.onclick   = (e) => listContainer.appendChild(addNewCard(cardList))

    listContainer.appendChild(listTitle)
    list.forEach(card => listContainer.appendChild(card))

    listContainer.appendChild(newcard)

    return listContainer
}

export default render
