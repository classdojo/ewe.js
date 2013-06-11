define ["mojo", 
  "ewe",
  "./helloWorld-control.pc", 
  "./helloWorld-v1.pc"], 
  (mojo, ewe, helloWorldControlTemplate, 
    helloWorldV1Template) ->

  # create the test
  helloWorldTemplateTest = ewe.test("hello world test").
  control("hello world control", helloWorldControlTemplate).
  variant("hello world v1", helloWorldV1Template)


  class HelloWorldView extends mojo.View

    ###
     select the template based on the ewe test
    ###

    paper: helloWorldTemplateTest.select()

    ###
     once _selectHello has been called, tell the test
     that we've succeeded with the given variation.
    ###

    _selectHello: () ->
      helloWorldTemplateTest.success()



