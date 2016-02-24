const store = require('../store');
const { fillResults } = require('../actions');

const topics = [{
  title: 'LinkedIn',
  body: 'Yada yada',
  url: 'https://linkedin.com/in/KamuelaFranco',
}, {
  title: 'Blog',
  body: 'Yada yada',
  url: 'https://medium.com/@Kamuela',
}, {
  title: 'Twitter',
  body: 'Yada yada',
  url: 'https://twitter.com/Kamuela',
}, {
  title: 'Email',
  body: 'Yada yada',
  url: 'mailto:kamuela.franco@gmail.com',
}, {
  title: 'GitHub',
  body: 'Yada yada',
  url: 'https://github.com/KamuelaFranco',
}, {
  title: 'Instagram',
  body: 'Yada yada',
  url: 'https://instagram.com/KamuelaFranco',
}];

function search() {
  const query = store.getState().searchQuery.toLowerCase();
  if (query) {
    const results = topics.filter(topic => topic.title.toLowerCase() === query);
    if (results.length) {
      store.dispatch(fillResults(results));
    }
  } else {
    store.dispatch(fillResults());
  }
}

module.exports = search;
