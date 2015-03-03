describe ("Airport", function() {

  it ("should be empty when created", function() {
    expect(new Airport().planes).toEqual ([])
  });

  it ("should tell plane to land", function() {
    airport = new Airport
    plane = jasmine.createSpyObj('plane',['land'])
    airport.land(plane);
    expect(plane.land).toHaveBeenCalled();
  });

  it ("should know a plane has landed", function() {
  	airport = new Airport
    plane = jasmine.createSpyObj('plane',['land'])
  	airport.land(plane);
  	expect(airport.planes).toEqual([plane]);
  });

});