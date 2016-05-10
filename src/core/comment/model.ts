'use strict'

import { v4 as uuid } from 'node-uuid'

import User from '../user/model'

class Comment {
    id: string
    owner: User
    text: string
    created_at: Date

    constructor(text: string, owner: User){
        this.id = uuid()
        this.text = text
        this.owner = owner
        this.created_at = new Date()
    }
}

export default Comment
