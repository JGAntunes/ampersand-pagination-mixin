/*$AMPERSAND_VERSION*/
var assign = require('lodash.assign');

module.exports ={
  fetchPage: function(options){
    options || (options = {remove: false, merge: false, add: true});
    options.data = options.data || {};
    var data = this.data;
    if(options.reset){
      options = {};
      data.skip = 0;
    }
    assign(data, options.data);
    data.skip = data.skip ? data.skip : 0;
    data.limit = data.limit ? data.limit : 10;
    this.fetch(data);
    data.skip += data.limit;
    this.data = data;
  }
};