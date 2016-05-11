'use strict'

import board from './demo/board'
import renderBoard from './core/board/ui'

let boardUi = renderBoard(board)
document.body.appendChild(boardUi)

document.body.addEventListener('rerender', (e) => {
    document.body.removeChild(boardUi)
    boardUi = renderBoard(board)
    document.body.appendChild(boardUi)
})
