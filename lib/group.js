// Generated by CoffeeScript 1.6.2
(function() {
  var Group, Test, utils;

  Test = require("./test");

  utils = require("./utils");

  /*
   group can be a users id, location, or anything that 
   could categorize a group of people.
  */


  Group = (function() {
    /*
    */
    function Group(key, ewe) {
      this.key = key;
      this.ewe = ewe;
      this._tests = {};
    }

    /*
     returns a test
    */


    Group.prototype.test = function(name) {
      return this._tests[name] || (this._tests[name] = new Test(name, this));
    };

    return Group;

  })();

  module.exports = Group;

}).call(this);
