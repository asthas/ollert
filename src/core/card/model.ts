'use strict'

import { v4 as uuid } from 'node-uuid'

import User from '../user/model'
import Task from '../task/model'

class Card {
    id: string
    title: string
    owner: User
    created_at: Date
    tasks: Task[]

    constructor(title: string, owner: User) {
        this.id = uuid()
        this.title = title
        this.owner = owner
        this.tasks = []
        this.created_at = new Date()
    }
}

export default Card
