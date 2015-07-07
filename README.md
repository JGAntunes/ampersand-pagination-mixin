[![js-semistandard-style](https://cdn.rawgit.com/flet/semistandard/master/badge.svg)](https://github.com/Flet/semistandard)
[![Dependency Status](https://david-dm.org/jgantunes/ampersand-pagination-mixin.svg)](https://david-dm.org/jgantunes/ampersand-pagination-mixin)
[![devDependency Status](https://david-dm.org/jgantunes/ampersand-pagination-mixin/dev-status.svg)](https://david-dm.org/jgantunes/ampersand-pagination-mixin#info=devDependencies)

# ampersand-pagination-mixin
A simple mixin to be used with ampersand collection to perform paginated requests. This module assumes you somehow implement a restful method `collection.fetch()` therefore being a perfect match to be used with [ampersand-rest-collection](https://github.com/AmpersandJS/ampersand-rest-collection). It works by inserting a `skip` and `limit` fields on the query component of the URI.

Example:

```javascript
  var InfiniteScrollMixin = require('ampersand-pagination-mixin');
  var RestCollection = require('ampersand-rest-collection');
  var MyModel = require('./MyModel');

  var PaginatedCollection = RestCollection.extend(InfiniteScrollMixin, {
    model: MyModel,
    url: '/api/paginated-resource'
  });
  
  var myCollection = new PaginatedCollection();

  // Now just use the method and let it keep the state for you
  myCollection.fetchPage();
```

To use this collection with a infinite scroll view use [ampersand-infinite-scroll](https://github.com/JGAntunes/ampersand-infinite-scroll) as it works out of the box with it.

## credits

Created by [@JGAntunes](http://github.com/JGAntunes), with the support of [@SINFO](http://github.com/sinfo).


## license

MIT
