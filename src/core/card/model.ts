'use strict'

import { v4 as uuid } from 'node-uuid'

import User from '../user/model'

class Card {
    id: string
    title: string
    owner: User
    order: number
    created_at: Date
    tasks: any[]

    constructor(title: string, owner: User, order: number){
        this.id = uuid()
        this.title = title
        this.owner = owner
        this.order = order
        this.tasks = []
        this.created_at = new Date()
    }
}

export default Card
