## ewe.js (yo͞o)


a/b testing for the front-end


## Example

```javascript


var ewe = require("ewe")();


//pick the ab test service
ewe.use({
  optimizely: {
    //credentials
  }
});




//create a new AB test case
launchpadTest = ewe.test("launchpad", {
  showHud: {
    value: showHudV1,
    weight: 1
  },
  showHudV2: {
    value: showHudV2,
    weight: 3
  }
});

ewe.load(function() {
  //all the function 
  launchpadTest.value().call();
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

```



## API

### .use(options)

service to use

### .load(cb)

loads the test information for the given user

#### test ewe.test(name, options) 

creates a new test case, or returns a given test if it's registered.

- `name` - name of the st
- `options` - options for the test - items to pick from
  - `[name]` - name of the variation
    - `value` - value to return when picking
    - `weight` - weight of the value


#### test.success(metadata)

called after the test has succeeded

#### test.fail(metadata)

called after the test has failed






