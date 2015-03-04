describe ("Plane", function() {
	
  var plane;

  it("should be flying when created", function() {
    expect(new Plane().isFlying).toBe(true)
  });

  it("should be able to land", function() {
    plane = new Plane;
    plane.land();
    expect(plane.isFlying).toBe(false)
  });

  it("should be able to take off", function() {
  	plane = new Plane;
  	plane.land();
  	plane.takeOff();
  	expect(plane.isFlying).toBe(true)
  });

});