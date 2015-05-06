describe ("Airport", function() {

  var airport;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['land','takeOff']);
  });

  it ("should be empty when created", function() {
    expect(new Airport().planes).toEqual ([]);
  });

  it ("should tell plane to land", function() {
    airport.land(plane);
    expect(plane.land).toHaveBeenCalled();
  });

  it ("should know a plane has landed", function() {
  	airport.land(plane);
  	expect(airport.planes).toEqual([plane]);
  });

  it ("should be able to tell a plane to take off", function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(plane.takeOff).toHaveBeenCalled();
  });

  it ("should know a plane has taken off", function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.planes).toEqual ([]);
  });

  it("shouldn't accept planes when full", function() {
  	while (airport.planes.length < 10) {
  		airport.land(plane);
  	}
 	expect(function(){airport.land(plane);}).toThrow("full");
  });

  it("shouldn't let a plane take off that isn't there", function() {
  	while (airport.planes.length > 0) {
  		airport.takeOff(plane);
  	}
  	expect(function(){airport.takeOff(plane);}).toThrow("empty");
  });

});







