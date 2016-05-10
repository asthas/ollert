'use strict'

import User from '../core/user/model'
import Card from '../core/card/model'
import CardList from '../core/cardlist/model'
import Board from '../core/board/model'

const astha  = new User('astha')
const sakshi = new User('sakshi')

const card1 = new Card('test-title-1', astha, 0)
const card2 = new Card('test-title-2', astha, 1)
const card3 = new Card('test-title-3', sakshi, 2)

const cardList = new CardList('My List', [card1, card2, card3])

const board = new Board([cardList])

export default board
