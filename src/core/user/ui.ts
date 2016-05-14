'use strict'

import User from './model'
import Users from '../board/model'

const render = (users: User[]) => {
    const myModal = document.createElement('div')
    myModal.className = 'myModal'
    const modalContent = document.createElement('div')
    modalContent.className = 'modal-content'
    const modalHeader = document.createElement('div')
    modalHeader.className = 'modal-header'
    var cross = document.createElement('span')
    cross.className = 'close'
    cross.innerText = 'x'
    modalHeader.appendChild(cross)
    var modalBody = document.createElement('div')
    modalBody.className = 'modal-body'
    var modalFooter = document.createElement('modalFooter')
    modalFooter.className = 'modal-footer'

    modalContent.appendChild(modalHeader)
    modalContent.appendChild(modalBody)
    modalContent.appendChild(modalFooter)
    myModal.appendChild(modalContent)

    cross.onclick = () => myModal.style.display = 'none'
    window.onclick = (event) => {
        if(event.target == myModal){
            myModal.style.display = 'none'
        }
    }

    return myModal
}

export default render
