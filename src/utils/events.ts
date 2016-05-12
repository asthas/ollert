'use strict'

const Events = {
    rerender() {
        const event = new Event('rerender')
        document.body.dispatchEvent(event)
    },

    save() {
        const event = new Event('save')
        document.body.dispatchEvent(event)
    },

    delCard(id: string) {
        const event = new Event('delCard')
        event['id'] = id

        const cardLists = Array.prototype
            .slice.call(document.getElementsByClassName('cardlist')) as HTMLElement[]

        cardLists.forEach(cardList => cardList.dispatchEvent(event))
    },

    updateList() {
        const event = new Event('updateList')

        const cardLists = Array.prototype
            .slice.call(document.getElementsByClassName('cardlist')) as HTMLElement[]

        cardLists.forEach(cardList => cardList.dispatchEvent(event))
    }
}

export default Events
