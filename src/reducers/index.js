const { combineReducers } = require('redux');
const searchQuery = require('./searchQuery');
const secondSubReducer = require('./secondSubReducer');
const autoplaySupport = require('./autoplaySupport');

// Create a root reducer and expose it for store creation
const rootReducer = combineReducers({
    searchQuery,
    secondSubReducer,
    autoplaySupport
});

module.exports = rootReducer;