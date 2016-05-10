'use strict'

import { v4 as uuid } from 'node-uuid'

import Card from '../card/model'

class CardList {
    id: string
    title: string
    cards: Card[]

    constructor(title: string, cards?: Card[]) {
        this.id = uuid()
        this.title = title
        this.cards = cards ? cards : []
    }
}

export default CardList
