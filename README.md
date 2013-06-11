## ewe.js (yo͞o)


a/b testing for the front-end


## Example

```javascript


var ewe = require("ewe");


//pick the ab test service
ewe.use({
  optimizely: {
    //credentials
  }
});




//create a new AB test case
launchpadTest = ewe.test("launchpad").
  control("show hud", showHudV1).
  variant("show hud 2", showHudV2).
  variant("show hud 3", { weight: 3}, showHudV3);

ewe.load(function() {
  
  //select a random variation, call the returned function.
  launchpadTest.select().call();
})



function showHudV1() {
  launchpadTest.success({
    //data
  })
  console.log("ab test 1");
}

function showHudV2() {
  launchpadTest.fail({
    //info about error
  });
    
  //this is also valid
  ewe.fail("launchpad", { })
  
  //along with this
  ewe.test("launchpad").fail({ });
  console.log("ab test 2");
}

function showHudV3() {
  
}

```



## API

### .use(options)

service to use

### .load(cb)

loads the test information for the given user

#### test ewe.test(name) 

creates a new test case, or returns a given test if it's registered.

- `name` - name of the st

#### test.control(name, value)

the control test

#### test.variant(name [, options], value)

the test variation

- `options` - (optional) the options for the variant
  - `weight` - weight of the variation



#### value test.select([variationName])

selects a variation, and returns the given value.

#### value test.control()

returns the control test

`variationName` - (optional) the variation to select




#### test.success(metadata)

called after the test has succeeded

#### test.fail(metadata)

called after the test has failed

### test.complete(error, success)

called after error / success






