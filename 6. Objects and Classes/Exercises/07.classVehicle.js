function classVehicle() {
  class Vehicle {
    constructor(type, model, parts, fuel) {
      this.type = type;
      this.model = model;
      this.parts = parts;
      this.fuel = fuel;
      this.parts.quality = this.parts.engine * this.parts.power;
    }

    drive(burnedFuel) {
      return (this.fuel -= burnedFuel);
    }
  }

  let parts = {
    engine: 6,
    power: 100,
  };

  let vehicle = new Vehicle('Van', 'Cooper', parts, 100);
  vehicle.drive(100);
  console.log(vehicle.type, vehicle.model, vehicle.parts);
  console.log(`Fuel: ${vehicle.fuel}`);
  console.log(`Quality: ${vehicle.parts.quality}`);
}
classVehicle();
