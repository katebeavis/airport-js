describe ("Airport", function() {

  var airport;

  beforeEach(function() {
    airport = new Airport;
    plane = jasmine.createSpyObj('plane',['land','takeOff'])
  });

  it ("should be empty when created", function() {
    expect(new Airport().planes).toEqual ([])
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
    airport.takeOff(plane);
    expect(plane.takeOff).toHaveBeenCalled();
  });

  it ("should know a plane has taken off", function() {
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.planes).toEqual ([]);
  });

});