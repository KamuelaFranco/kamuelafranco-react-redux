const { combineReducers } = require('redux');
const searchQuery = require('./searchQuery');
const secondSubReducer = require('./secondSubReducer');
const results = require('./results');

// Create a root reducer and expose it for store creation
const rootReducer = combineReducers({
    searchQuery,
    secondSubReducer,
    results
});

module.exports = rootReducer;