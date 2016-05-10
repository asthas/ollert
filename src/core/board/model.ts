'use strict'

import CardList from '../cardlist/model'

class Board {
    cardLists: CardList[]

    constructor(cardLists?: CardList[]) {
        this.cardLists =  cardLists ? cardLists : [new CardList('Demo list')]
    }
}

export default Board
