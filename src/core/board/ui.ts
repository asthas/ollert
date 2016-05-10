'use strict'

import Board from './model'
import renderList from '../cardlist/ui'

const render = (board: Board) => {
    const boardUi = document.createElement('div')
    boardUi.id = 'board'

    const lists = board.cardLists.map(cardList => renderList(cardList))
    lists.forEach(list => boardUi.appendChild(list))

    return boardUi
}

export default render
