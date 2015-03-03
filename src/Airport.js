var Airport = function() {
  this.planes = []
};

Airport.prototype.land = function(plane) {
	if (this.planes.length >= 10) {
		throw "full";
	}
	plane.land();
	this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  plane.takeOff();
  this.planes.pop(plane);
};
