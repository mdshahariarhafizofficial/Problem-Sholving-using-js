const arr1 = [30, 25, 12, 10, 23];
const arr2 = [100, 75, 112, 18, 21];
const arr3 = [500, 27, 12, 20, 24];

const allArray = arr1.concat(arr2).concat(arr3);
console.log(allArray);

const allArray2 = [arr1, arr2, arr3];
console.log(allArray2);

// Spread operator
const allArray3 = [...arr1, ...arr2, ...arr3];
console.log(allArray3);

let price1 = 800;
let price2 = 700;
let price3 = 100;
let result = Math.max(price1, price2, price3);
console.log(result);

let priceArray = [60, 52, 100, 500];
let maxPrice = Math.max(...priceArray);
console.log(maxPrice);

