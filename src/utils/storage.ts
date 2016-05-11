'use strict'

import board from '../core/board/model'

function storageAvailable(type) {
	try {
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}

if (storageAvailable('localStorage')) {
	localStorage.setItem('board', JSON.stringify(board))
}
else {
	console.log("localStorage unavailable!")
}
