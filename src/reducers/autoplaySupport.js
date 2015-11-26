const { SET_AUTOPLAY_SUPPORT } = require('../actions');

function autoplaySupport(state = false, action) {
	switch (action.type) {
		case SET_AUTOPLAY_SUPPORT:
			return action.isSupported;
		default:
			return state;
	}
}

module.exports = autoplaySupport;