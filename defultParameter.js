function add(num1, num2 = 30){
    let sum = num1+num2;
    return sum;
};

let result1 = add(50, 10);
console.log(result1);

let result2 = add(50);
console.log(result2); 