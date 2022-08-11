function classLaptop() {
  class Laptop {
    constructor(info, quality) {
      this.info = info;
      this.quality = Number(quality);
      this.isOn = false;
    }

    turnOn() {
      this.isOn = true;
      this.quality--;
    }
    turnOff() {
      this.isOn = false;
      this.quality--;
    }

    showInfo = () => JSON.stringify(this.info);

    get price() {
      return 800 - this.info.age * 2 + this.quality * 0.5;
    }
  }

  let info = {
    producer: 'Dell',
    age: 2,
    brand: 'XPS',
  };
  let laptop = new Laptop(info, 10);

  laptop.turnOn();
  console.log(laptop.showInfo());
  laptop.turnOff();
  console.log(laptop.quality);
  laptop.turnOn();
  console.log(laptop.isOn);
  console.log(laptop.price);
}
classLaptop();
