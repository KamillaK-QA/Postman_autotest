// autotest for method https://swapi.dev/api/people/10

pm.test("Status code is 200", function() {pm.response.to.have.status(200);})
pm.test("Response time is less than 300ms", function () {pm.expect(pm.response.responseTime).to.be.below(300);});
pm.test("Status code name has string", function () {pm.response.to.have.status("OK");});


// autotest for method https://swapi.dev/api/planets/7/
pm.test("1_Content-Type is present", function () {
    pm.response.to.have.header("Content-Type");
});
pm.test("2_Status code is 200ms", function () {
    pm.response.to.have.status(200);
});

