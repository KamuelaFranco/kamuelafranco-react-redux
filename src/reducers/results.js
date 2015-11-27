const { FILL_RESULTS } = require('../actions');

function results(state = [], action) {
	switch (action.type) {
		case FILL_RESULTS:
			return action.results || [];
		default:
			return state;
	}
}

module.exports = results;