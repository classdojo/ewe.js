class Variation
  
  ###
  ###

  constructor: (options, @test, @group) ->
    @weight  = options.weight
    @value   = options.value
    @control = options.control


module.exports = Variation
