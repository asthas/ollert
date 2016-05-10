'use strict'

import Board from './model'

const render = (board: Board, mount: HTMLElement) => {
    mount.innerText = JSON.stringify(board)
}

export default render
