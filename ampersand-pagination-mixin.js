/* $AMPERSAND_VERSION */
var assign = require('lodash.assign');

var mixin = {
  /**
   * Function to make a paginated REST request
   *
   * @param {Object}  options     - A set of valid options as follow
   *                    .reset    - Sets the skip value for 0
   *                    .data     - An object containing
   *                      .skip   - The number of docs to skip
   *                      .limit  - The limit of docs to  get
   *                      (...)   - Other options to pass in the query
   *                                string as stated in `ampersand-sync`
   *                    (...)     - Other options valid fot the `ampersand-fetch-collection`
   */
  fetchPage: function (options) {
    // Defaults so the requested collections stays unchanged
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
