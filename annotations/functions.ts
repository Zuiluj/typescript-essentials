// arrow function
const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
}

// normal function
function divide(a: number, b: number): number {
    return a / b;
}

// Anonymous functions
const multiply = function(a: number, b: number): number {
    return a * b;
}

// Returns nothing including null/undefined
const logger = (message: string): void => {
    console.log(message);
}

// a type containing no values, either throw an exception or fail to terminate
const throwError = (message: string): never => {
    throw new Error(message);
}


const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

// // Normal call
// const logWeather = (forecast: { date: Date, weather: string }): void => {
//     console.log(forecast.date);
//     console.log(forecast.weather);
// }

// Destructuring call
const logWeather = ({ date, weather }: { date: Date, weather: String}): void => {
    console.log(date);
    console.log(weather);
}


logWeather(todaysWeather);