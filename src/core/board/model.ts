'use strict'

import CardList from '../cardlist/model'
import User from '../user/model'

class Board {
    cardLists: CardList[]
    users: User[]
    currentUser: Number

    static newUser (board: Board, username: string) {
        return board.users.push(new User(username))
    }

    static setCurrentUser(board: Board, username: string){
        board.currentUser = board.users.findIndex((user) => user.username === username) 
    }

    constructor(cardLists?: CardList[], users?: User[]) {
        this.cardLists =  cardLists ? cardLists : [new CardList('Demo list')]
        this.users = users || []
    }
}

export default Board
