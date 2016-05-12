'use strict'

import Board from './model'
import renderList from '../cardlist/ui'
import CardList from '../cardlist/model'
import Events from '../../utils/events'

const render = (board: Board) => {
    const boardUi = document.createElement('div')
    boardUi.id = 'board'

    const lists = board.cardLists.map(cardList => renderList(cardList))
    lists.forEach(list => boardUi.appendChild(list))

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
