const colors = ['red', 'green', 'yellow']; //string
const colors1: string[] = ['red', 'blue', 'white'];
const color2: string[] = [];
const color3 = []; // any / never

const dates = [new Date(), new Date()];

const fruitsByColor = [
  ['tomato'],
  ['apple'], 
  ['lemon']
]; // string[][]


const fruitsByColor1: string[][] = [];

// Help with inference when extracting values
const color = colors[0]; // string
const color1 = colors.pop();

//Prevent incompatible value
colors.push(true); // error

// Help whith 'map'
colors.map((color: string): string => {
  return color.toUpperCase();
})

// Flexible types
const impotantDates: (Date | string)[] = [new Date(), '2024-01-06'];// (string | Date)[]
impotantDates.push('2024-01-08');
impotantDates.push(new Date());
impotantDates.push(10); // error