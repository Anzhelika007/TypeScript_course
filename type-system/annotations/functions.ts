const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
}

function divide(a: number, b: number): number {
  return a / b; 
}
const multiply = function(a: number, b: number): number {
  return a * b;
}
// function return nothing(or undefined) - void
const logger = (message: string): void => {
  console.log(message);
  //return undefined;
}

const throwErrow = (message: string): string => {
  if (!message){
    throw new Error(message);
  }
  return message; // becouse maybe run return 
}

const throwErrow1 = (message: string): void => {
  if (!message){
    throw new Error(message); //becouse maybe  will be error
  }
}

const throwErrow3 = (message: string): never => {
  throw new Error(message); //only show error
}

const todayWeather = {
  date: new Date(),
  weather: 'sunny',
};

// !!! destructuring then annotation
const logWeather1 = ({date, weather}: { date: Date, weather: string}):void => {
  console.log(date);
  console.log(weather);
};

// ES2015
const logWeather = ({date, weather}) => {
  console.log(date);
  console.log(weather);
}

logWeather(todayWeather);
  