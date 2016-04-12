// Define actions
const SEARCH = 'SEARCH';
const FILL_RESULTS = 'FILL_RESULTS';

// Define action creators
function search(query) {
  return { type: SEARCH, query };
}

function fillResults(results) {
  return { type: FILL_RESULTS, results };
}

module.exports = {
  SEARCH,
  FILL_RESULTS,
  search,
  fillResults,
};
