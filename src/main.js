require('./style.css');

const React = require('react');
const ReactDOM = require('react-dom');

const { Provider } = require('react-redux');
const App = require('./containers/App');

const store = require('./store');
require('./lib/search');

window.addEventListener('load', () => {
	window.setInterval(() => { 
		console.log(store.getState());
	}, 3000);
	require('./lib/autoplay');
  ReactDOM.render(
      <Provider store={store}>
          <App />
      </Provider>,
      document.getElementById('react-mount')
  );
});