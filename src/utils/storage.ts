'use strict'

import board from '../core/board/model'

function storageAvailable() {
	try {
		var storage = window.localStorage,
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}



const storage = {
    saveInstance(board: board){
        if (storageAvailable()) {
             window.localStorage.setItem('board', JSON.stringify(board))
        }
    },

    readInstance(){
        if (storageAvailable()) {
            JSON.parse(window.localStorage.getItem('board'))
        }
        return null
    }
}

export default storage
