// Generated by CoffeeScript 1.6.2
(function() {
  var Test, Variation, utils;

  Variation = require("./variation");

  utils = require("./utils");

  Test = (function() {
    /*
    */
    function Test(name, group) {
      this.name = name;
      this.group = group;
      this.ewe = group.ewe;
      this._variants = [];
    }

    /*
     selects a variant
    */


    Test.prototype.select = function() {
      var variant, variantIndex;

      variantIndex = utils.getRandomIndex(this.group.key + this.name, this.weights());
      variant = this._variants[variantIndex];
      return variant;
    };

    /*
     returns the weights of the variants
    */


    Test.prototype.weights = function() {
      var variant, weights, _i, _len, _ref;

      weights = [];
      _ref = this._variants;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        variant = _ref[_i];
        weights.push(Math.max(variant.weight || 1, 1));
      }
      return weights;
    };

    /*
     sets the control variant
    */


    Test.prototype.control = function(name, options, value) {
      if (!arguments.length) {
        return this._control;
      }
      if (arguments.length === 2) {
        value = options;
        options = {};
      }
      options.control = true;
      this.variant(name, options, value);
      this._control = this._variants[this._variants.length - 1];
      return this;
    };

    /*
     creates a new variation
    */


    Test.prototype.variant = function(name, options, value) {
      if (arguments.length === 2) {
        value = options;
        options = {};
      }
      options.value = value;
      options.name = name;
      this._variants.push(new Variation(options, this, this.group));
      return this;
    };

    /*
    */


    Test.prototype.start = function() {
      this.ewe.service.start(this._selected = this.select().start());
      return this._selected;
    };

    /*
    */


    Test.prototype.complete = function() {
      if (!this._selected) {
        return;
      }
      return this.ewe.service.complete(this._selected.stop());
    };

    return Test;

  })();

  module.exports = Test;

}).call(this);
