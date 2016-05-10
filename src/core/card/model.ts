'use strict'

import { v4 as uuid } from 'node-uuid'

class Card {
    id: string
    title: string
    owner: string
    order: number
    created_at: Date
    tasks: any[]

    constructor(title: string, owner: string, order: number){
        this.id = uuid()
        this.title = title
        this.owner = owner
        this.order = order
        this.tasks = []
        this.created_at = new Date()
    }
}

export default Card
