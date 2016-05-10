'use strict'

import Card from './core/card/model'
import CardList from './core/cardlist/model';

const card1 = new Card('test-title', 'me', 0)
const card2 = new Card('o', 'yes', 1)

const cardList = new CardList('My List', [card1, card2])

console.log(cardList)
