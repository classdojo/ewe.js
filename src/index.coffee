Group = require "./group"

class Ewe

  ###
  ###

  constructor: () ->
    @_groups = {}

  ###
   scope identifier used to clasify exactly what variants to use. Note 
   that many users might have the same scope - depending on what country
   they might live in, or other variables. Scope can also be specific to a user
   ID
  ###

  group: (key) ->
    @_groups[key] or (@_groups[key] = new Group(key, @))


module.exports = () -> new Ewe()