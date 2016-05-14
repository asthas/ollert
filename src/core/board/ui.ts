'use strict'

import Board from './model'
import renderList from '../cardlist/ui'
import CardList from '../cardlist/model'
import Events from '../../utils/events'
import Sortable from '../../utils/globals'
import renderModal from '../user/ui'

const render = (board: Board) => {
    const boardUi = document.createElement('div')
    boardUi.id = 'board'
    boardUi.appendChild(renderModal(board.users))
    const listContainer = document.createElement('div')
    const lists = board.cardLists.map(cardList => renderList(cardList))
    lists.forEach(list => listContainer.appendChild(list))
    Sortable.create(listContainer)
    boardUi.appendChild(listContainer)

    const addNewList = document.createElement('div')
    addNewList.innerText = 'Add a list...'
    addNewList.className = 'cardlist'
    addNewList.onclick = () => {
        board.cardLists.push(new CardList('New List'))
        Events.rerender()
    }

    boardUi.appendChild(addNewList)

    boardUi.addEventListener('delList', (e) => {
        board.cardLists = board.cardLists.filter(cardList => cardList.id !== e['id'])
        Events.rerender()
    })

    return boardUi
}

export default render
