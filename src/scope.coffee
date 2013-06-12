Test  = require "./test"
utils = require "./utils"


###
 scope can be a users id, location, or anything that 
 could categorize a group of people.
###

class Scope

  ###
  ###

  constructor: (@key, @ewe) ->
    @_tests = {}

  ###
   returns a test
  ###

  test: (name) -> @_tests[name] or (@_tests[name] = new Test(name, @))

module.exports = Scope