// Creates the store and exposes it to the app
const { createStore } = require('redux');
const rootReducer = require('../reducers');

const store = createStore(rootReducer);

module.exports = store;
