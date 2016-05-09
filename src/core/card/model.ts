'use strict'

class Card{
    id: string
    title: string
    owner: string
    order: number
    created_at: Date
    tasks: any[]

    constructor(title: string, owner: string, order: number){
        this.id = 'todo-generate-random-id'
        this.title = title
        this.owner = owner
        this.order = order
        this.tasks = []
        this.created_at = new Date()
    }
}
