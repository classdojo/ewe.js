// Generated by CoffeeScript 1.6.2
(function() {
  var Ewe, Scope;

  Scope = require("./scope");

  Ewe = (function() {
    /*
    */
    function Ewe() {
      this._scopes = {};
    }

    /*
     scope identifier used to clasify exactly what variants to use. Note 
     that many users might have the same scope - depending on what country
     they might live in, or other variables. Scope can also be specific to a user
     ID
    */


    Ewe.prototype.scope = function(key) {
      return this._scopes[key] || (this._scopes[key] = new Scope(key, this));
    };

    return Ewe;

  })();

  module.exports = function() {
    return new Ewe();
  };

}).call(this);