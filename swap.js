// Way 1
let num1 = 50;
let num2 = 80;
console.log(`Before swap: \nNum1 = ${num1} \nNum2 = ${num2}`);
let temp = num1;
num1 = num2;
num2 = temp;
console.log(`After swap: \nNum1 = ${num1} \nNum2 = ${num2}`);


// Way 2
let x = 100;
let y = 500;
console.log(`Before swap: \nX = ${x} \nY = ${y}`);
x = x+y;
y = x-y;
x = x-y;
console.log(`After swap: \nX = ${x} \nY = ${y}`);


// Way 3
let a = 2000;
let b = 6000;
console.log(`Before swap: \nA = ${a} \nB = ${b}`);
[a, b] = [b, a];
console.log(`After swap: \nA = ${a} \nB = ${b}`);