'use strict'

import User from '../core/user/model'
import Card from '../core/card/model'
import CardList from '../core/cardlist/model'
import Board from '../core/board/model'

const astha  = new User('astha')
const sakshi = new User('sakshi')

const card1 = new Card('test-title-1', astha)
const card2 = new Card('test-title-2', astha)
const card3 = new Card('test-title-3', sakshi)

const card11 = new Card('test-title-11', astha)
const card22 = new Card('test-title-22', astha)
const card33 = new Card('test-title-33', sakshi)

const cardList1 = new CardList('My One List', [card1, card2, card3])
const cardList2 = new CardList('My Second List', [card11, card22, card33])
const board = new Board([cardList1, cardList2])

export default board
