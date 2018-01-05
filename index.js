const express =  require('express');
const bodyParser = require('body-parser');
const port = 8080;
const webApp = new express();

webApp.use(bodyParser.urlencoded({ extended: true }));
webApp.use(bodyParser.json({ strict: false }));


const rootHandler = require('./interfaces/root')();
const redditHandler = require('./interfaces/reddit')();

webApp.get('/', rootHandler.version);
webApp.get('/reddit/subreddits', redditHandler.subreddits);
webApp.get('/reddit/posts*', redditHandler.posts);

webApp.listen(port, function() {
   console.log('Started, listening', port);
 });