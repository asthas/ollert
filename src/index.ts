'use strict'

import Board from './core/board/model'
import render from './core/board/ui'

const board = new Board()
const mount = document.getElementById('board')

render(board, mount)
