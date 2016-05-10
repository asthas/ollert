'use strict'

import board from './demo/board'
import renderBoard from './core/board/ui'

const mount = document.getElementById('board')

renderBoard(board, mount)
