// Define actions
const GO_FORWARD = 'GO_FORWARD';
const GO_BACKWARD = 'GO_BACKWARD';
const SEARCH = 'SEARCH';
const SET_AUTOPLAY_SUPPORT = 'SET_AUTOPLAY_SUPPORT';

// Define action creators
function search(query) {
	return { type: SEARCH, query };
}

function nextPage(steps) {
	return { type: GO_FORWARD, steps };
}

function prevPage(steps) {
	return { type: GO_BACKWARD, steps };
}

function setAutoplaySupport(isSupported) {
	return { type: SET_AUTOPLAY_SUPPORT , isSupported }
}

module.exports = {
	GO_FORWARD,
	GO_BACKWARD,
	SEARCH,
	SET_AUTOPLAY_SUPPORT,
	nextPage,
	prevPage,
	search,
	setAutoplaySupport
};