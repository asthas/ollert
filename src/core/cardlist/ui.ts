'use strict'

import CardList from './model'
import renderCard from '../card/ui'
import {addNewCard} from '../card/ui'

const render = (cardList: CardList): HTMLElement => {
    const listContainer = document.createElement('div')
    listContainer.className = 'cardlist'

    const listTitle = document.createElement('h4')
    listTitle.innerText = cardList.title

    const list = cardList.cards.map(card => renderCard(card))

    const newcard = document.createElement('a')
    newcard.className = 'newcard'
    newcard.onclick = addNewCard
    newcard.innerHTML += '<p>Add a new card</p>'

    listContainer.appendChild(listTitle)
    list.forEach(card => listContainer.appendChild(card))

    listContainer.appendChild(newcard)

    return listContainer
}

export default render
