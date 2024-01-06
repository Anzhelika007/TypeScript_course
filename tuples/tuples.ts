const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

const cola: [string, boolean, number] = ['brown', true, 40];
cola[1] = 'black'; // error


// Alias
type Drink = [string, boolean, number];
const coda: Drink = ['clear', true, 40];
const coffee: Drink = ['black', false, 0];

// When use ?
const carSpecs: [number, number] = [400, 3354];

const carSpecsObj = {
  horsePower: 400,
  weight: 3354
};

