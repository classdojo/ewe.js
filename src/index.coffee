Scope = require "./scope"

class Ewe

  ###
  ###

  constructor: () ->
    @_scopes = {}

  ###
   scope identifier used to clasify exactly what variants to use. Note 
   that many users might have the same scope - depending on what country
   they might live in, or other variables. Scope can also be specific to a user
   ID
  ###

  scope: (key) ->
    @_scopes[key] or (@_scopes[key] = new Scope(key, @))


module.exports = () -> new Ewe()