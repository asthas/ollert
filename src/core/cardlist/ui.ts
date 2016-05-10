'use strict'

import CardList from './model'
import renderCard from '../card/ui'

const render = (cardList: CardList): HTMLElement => {
    const listContainer = document.createElement('div')

    const listTitle = document.createElement('h1')
    listTitle.innerText = cardList.title

    const list = cardList.cards.map(card => renderCard(card))

    listContainer.appendChild(listTitle)
    list.forEach(card => listContainer.appendChild(card))

    return listContainer
}

export default render
