/*$AMPERSAND_VERSION*/
var assign = require('lodash.assign');

module.exports ={
  limit: 10,
  skip: 0,
  fetchPage: function(options){
    options || (options = {remove: false, merge: false, add: true});
    options.data = options.data || {};
    if(options.reset){
        options = {};
        this.skip = 0;
    }
    assign(this, options.data);
    this.fetch(options);
    this.skip += this.limit;
  }
};