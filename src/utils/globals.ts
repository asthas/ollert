'use strict'

interface Sortable{
    create(elem: HTMLElement, options?: any): void
}

export const Sortable = window['Sortable'] as Sortable
