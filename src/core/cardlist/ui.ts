'use strict'

import CardList from './model'
import renderCard from '../card/ui'
import Events from '../../utils/events'

const addNewCard = (cardList: CardList) => {
    const newCardDiv = document.createElement('div')

    const cardarea = document.createElement('textarea')
    cardarea.className = 'cardarea'
    cardarea.setAttribute('rows', '3')

    const done = document.createElement('button')
    done.className = 'done'
    done.innerText = 'Done'
    done.onclick = (e) => {
        if (cardarea.value !== '') {
            CardList.addCard(cardList, cardarea.value)
        }

        newCardDiv.removeChild(cardarea)
        newCardDiv.removeChild(done)
        newCardDiv.removeChild(cancel)

        Events.rerender()
    }

    const cancel = document.createElement('button')
    cancel.className = 'cancel'
    cancel.innerText = 'Cancel'
    cancel.onclick = (e) => {
        newCardDiv.removeChild(cardarea)
        newCardDiv.removeChild(done)
        newCardDiv.removeChild(cancel)

        Events.rerender()
    }

    newCardDiv.appendChild(cardarea)
    newCardDiv.appendChild(done)
    newCardDiv.appendChild(cancel)

    return newCardDiv
}

const makeDraggable = (cardListUi: HTMLElement) => {
    return window['Sortable'].create(cardListUi)
}

const render = (cardList: CardList): HTMLElement => {
    const cardListUi = document.createElement('div')
    cardListUi.className = 'cardlist'

    const listTitle = document.createElement('h4')
    listTitle.innerText = cardList.title

    const list = cardList.cards.map(card => renderCard(card))

    const newcard = document.createElement('a')
    newcard.className = 'newcard'
    newcard.innerText = 'Add a new card'
    newcard.onclick   = (e) => {
        newcard.innerText = ''
        cardListUi.appendChild(addNewCard(cardList))
    }

    cardListUi.appendChild(listTitle)

    const listContainer = document.createElement('div')
    list.forEach(card => listContainer.appendChild(card))
    cardListUi.appendChild(listContainer)
    makeDraggable(listContainer)

    cardListUi.appendChild(newcard)
    cardListUi.addEventListener('delCard', (e) => {
        const idToBeDeleted: string = e['id']
        CardList.removeCard(cardList, idToBeDeleted)
        Events.rerender()
    })

    return cardListUi
}

export default render
