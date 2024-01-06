interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const cola = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Cola has ${this.sugar} grams of sugar`;
  }
};

const printVehicle = (vehicle: { name: string; year: number; broken: boolean}): void => { // not pretty
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

const printVehicle1 = (vehicle: Vehicle): void => { // interface
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken? ${vehicle.broken}`);
};

const printSummary = (item: Reportable): void => { // interface => func
  console.log(item.summary());
};

printVehicle(oldCivic);
printVehicle1(oldCivic);
// type Reportable
printSummary(oldCivic);
printSummary(cola);