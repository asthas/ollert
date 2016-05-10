'use strict'

import CardList from '../cardlist/model'

class Board {
    cardLists: CardList[]

    constructor() {
        this.cardLists = [new CardList('Demo list')]
    }
}

export default Board
