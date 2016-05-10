'use strict'

import Board from './model'
import renderList from '../cardlist/ui'

const render = (board: Board, mount: HTMLElement) => {
    const lists = board.cardLists.map(cardList => renderList(cardList))
    lists.forEach(list => mount.appendChild(list))
}

export default render
