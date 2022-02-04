const authResolver = require('./auth');
const booksResolver = require('./books');
const ordersResolver = require('./orders');

const rootResolver = {
  ...authResolver,
  ...booksResolver,
  ...ordersResolver
};

module.exports = rootResolver;