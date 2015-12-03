require('./style.css');

const React = require('react');
const ReactDOM = require('react-dom');

const { Provider } = require('react-redux');
const App = require('./containers/App');

const store = require('./store');

window.addEventListener('load', () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('react-mount')
    );
});