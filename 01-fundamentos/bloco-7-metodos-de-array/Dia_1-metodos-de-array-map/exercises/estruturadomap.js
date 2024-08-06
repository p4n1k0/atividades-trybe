// Temperaturas em graus Celsius
const temperaturesCelsius = [23, 10, 32, 21, 47];

const convertToFahrenheit = (temperaturesCelsius) => {
    let temperaturesFahrenheit = temperaturesCelsius.map((temperature) => {
        return (temperature * 9 / 5) + 32;
    });

    return temperaturesFahrenheit;
};

console.log(convertToFahrenheit(temperaturesCelsius));


const numbers = [4, 9, -1, 16, -5, 25];

const calculateSquareRoots = (numbers) => {
    let squareRoots = numbers.map((number) => {
        
        if (number >= 0) {
            return Math.sqrt(number);
        } else {
            return NaN;
        }
    });
    return squareRoots;
};

console.log(calculateSquareRoots(numbers));
