// Define actions
const GO_FORWARD = 'GO_FORWARD';
const GO_BACKWARD = 'GO_BACKWARD';
const SEARCH = 'SEARCH';
const FILL_RESULTS = 'FILL_RESULTS';

// Define action creators
function search(query) {
    return {type: SEARCH, query};
}

function nextPage(steps) {
    return {type: GO_FORWARD, steps};
}

function prevPage(steps) {
    return {type: GO_BACKWARD, steps};
}

function fillResults(results) {
    return {type: FILL_RESULTS, results}
}

module.exports = {
    GO_FORWARD,
    GO_BACKWARD,
    SEARCH,
    FILL_RESULTS,
    nextPage,
    prevPage,
    search,
    fillResults
};