// A very badly contrived example of a sub-reducer

const { SEARCH } = require('../actions');

function searchQuery(state = '', action) {
	switch (action.type) {
		case SEARCH:
			return action.query;
		default:
			return state;
	}
}

module.exports = searchQuery;