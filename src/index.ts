'use strict'

import demoboard from './demo/board'
import renderBoard from './core/board/ui'
import storage from './utils/storage';

const board = storage.readInstance() || demoboard

let boardUi = renderBoard(board)
document.body.appendChild(boardUi)

document.body.addEventListener('rerender', (e) => {
    document.body.removeChild(boardUi)
    boardUi = renderBoard(board)
    document.body.appendChild(boardUi)
    storage.saveInstance(board)
})
