'use strict'

const Events = {
    rerender() {
        const event = new Event('rerender')
        document.body.dispatchEvent(event)
    }
}

export default Events
