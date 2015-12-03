'use strict';
const koa = require('koa');
const serve = require('koa-static');
const app = koa();

app.use(serve('.'));

app.listen(3000, () => {
    console.log('Serving on http://localhost:3000');
});