const routes = require('next-routes')();

// Here is the documentation how these path strings are parsed:
// https://github.com/pillarjs/path-to-regexp

routes.add('index', '/:section/:isOpen?/:imgId?');

module.exports = routes;
