/* $AMPERSAND_VERSION */
var assign = require('lodash.assign');

var mixin = {
  fetchPage: function (options) {
    options || (options = {remove: false, merge: false, add: true});
    options.data = options.data || {};
    var data = this.data;
    if (options.reset) {
      options = {};
      data.skip = 0;
    }
    assign(data, options.data);
    data.skip = data.skip ? data.skip : 0;
    data.limit = data.limit ? data.limit : 10;
    options.data = data;
    this.fetch(options);
    data.skip += data.limit;
    this.data = data;
  }
};

exports = module.exports = mixin;
