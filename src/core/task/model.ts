'use strict'

import {v4 as uuid} from 'node-uuid'
import User from '../user/model'
import Comment from '../comment/model'

class Task {
    id: string
    text: string
    order: number
    created_at: Date
    owner: User
    edited: boolean
    assigned_to: User
    comments: Comment[]

    constructor(text: string, order: number, owner: User, assigned_to?: User) {
        this.id = uuid()
        this.text = text
        this.order = order
        this.created_at = new Date()
        this.owner = owner
        this.edited = false
        this.assigned_to = assigned_to ? assigned_to : owner
        this.comments = []
    }
}

export default Task
