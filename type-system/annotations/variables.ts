let oranges: number = 5;
let speed: string = 'fast';
let hasDog: boolean = true;

let nothing: null = null;
let nothing1: undefined = undefined;

// built-in objects
let now: Date = new Date();

// array 
let colors: string[] = ['red', 'yellow', 'grey'];
let numbers: number[] = [1, 2, 3];
let result: boolean[] = [false, true, true];

//classes
class Car {

}

let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}