class Vehicle {
  // public drive(): void {
  //   console.log(`I'm driving`);
  // }

  // Class field
  // color: string = 'red'; // class field

  // constructor(color: string) {
  //   this.color = color;
  // }

  constructor(public color: string) {} // short note field 

  public stop(): void {
    console.log(`I'm stopped!`)
  }

  protected beep(): void {
    console.log(`Beeeeeep!`);
  }

}

class Car extends Vehicle {     // stop()

  constructor(public wheels: number, color: string) { // color for parent class
    super(color); // for parent class
  }

  private drive(): void {       // it is impossible to change the modifier if the method is inherited
    console.log(`I'm a car and I'm driving`);
  }
  startDrivingProcess(): void {
    this.drive();
    this.beep();
  }
}

const vehicle = new Vehicle('black');
console.log(vehicle.color);
// vehicle.drive();
vehicle.stop();
//vehicle.beep(); // error protected modif


const car = new Car(4, 'silver');
// car.startDrivingProcess(); // call privat method drive
// car.stop();

