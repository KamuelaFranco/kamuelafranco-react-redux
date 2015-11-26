const store = require('../store');

const topics = [{
	title: "LinkedIn",
	body: "Yada yada"
},{
	title: "Blog",
	body: "Yada yada"
},{
	title: "Twitter",
	body: "Yada yada"
}];

const unsubscribe = store.subscribe(() => {
	const query = store.getState().searchQuery;
	const results = topics.find(topic => {
		return topic.title === query;
	});
	if (results) {
		console.log(results);
	}
});