const { GO_FORWARD, GO_BACKWARD } = require('../actions');

function secondSubReducer(state = 0, action) {
    switch (action.type) {
        case GO_FORWARD:
            return state + action.steps;
        case GO_BACKWARD:
            return state - action.steps;
        default:
            return state;
    }
}

module.exports = secondSubReducer;