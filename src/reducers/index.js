const { combineReducers } = require('redux');
const searchQuery = require('./searchQuery');
const results = require('./results');

// Create a root reducer and expose it for store creation
const rootReducer = combineReducers({
  searchQuery,
  results,
});

module.exports = rootReducer;
