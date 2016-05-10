'use strict'

import Board from './core/board/model'
import renderBoard from './core/board/ui'

const board = new Board()
const mount = document.getElementById('board')

renderBoard(board, mount)
