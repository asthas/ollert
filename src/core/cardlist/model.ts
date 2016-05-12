'use strict'

import { v4 as uuid } from 'node-uuid'

import User from '../user/model'
import Card from '../card/model'

const defaultUser = new User('astha')

class CardList {
    id: string
    title: string
    cards: Card[]

    constructor(title: string, cards?: Card[]) {
        this.id = uuid()
        this.title = title
        this.cards = cards ? cards : []
    }

    static addCard(cardList: CardList, title: string, owner?: User) {
        owner = owner ? owner : defaultUser
        const card = new Card(title, owner)
        cardList.cards.push(card)
    }

    static removeCard(cardList: CardList, id: string) {
        cardList.cards = cardList.cards.filter(card => card.id !== id)
    }
}

export default CardList
