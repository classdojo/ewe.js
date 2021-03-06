// Generated by CoffeeScript 1.6.2
(function() {
  var Variation;

  Variation = (function() {
    /*
    */
    function Variation(options, test, group) {
      this.test = test;
      this.group = group;
      this.weight = options.weight;
      this.value = options.value;
      this.control = options.control;
    }

    /*
    */


    Variation.prototype.start = function() {
      this.startTime = Date.now();
      this.stopTime = void 0;
      return this;
    };

    /*
    */


    Variation.prototype.stop = function() {
      this.stopTime = Date.now();
      return this;
    };

    /*
    */


    Variation.prototype.toJSON = function() {
      var result;

      result = {
        startTime: this.startTime,
        weight: this.weight,
        value: this.value
      };
      if (this.stopTime != null) {
        result.duration = this.stopTime - this.startTime;
        result.stopTime = this.stopTime;
      }
      return result;
    };

    return Variation;

  })();

  module.exports = Variation;

}).call(this);
