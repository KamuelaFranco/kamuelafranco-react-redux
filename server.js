'use strict';
const path = require('path');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.sendFile(path.resolve('./index.html'));
});

// This is your bundle.js
app.use('/build', express.static('build'));

// These are images that aren't currently packaged in the bundle
app.use('/assets', express.static('assets'));

app.listen(3000, () => {
    console.log('Serving on http://localhost:3000');
});