'use strict'

import CardList from '../cardlist/model'

class Board {
    cardList: CardList

    constructor() {
        this.cardList = new CardList('Demo list')
    }
}

export default Board
