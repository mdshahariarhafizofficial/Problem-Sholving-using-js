function summation(n1, n2){
    let arg = [...arguments];
    // console.log(arg);
    let sum = 0;
    for( let i = 0; i < arg.length; i++ ){
        let element = arg[i];
        sum = sum + element;
    }
    return sum;
};

const result = summation(50, 10, 70, 8);
console.log(result);

const result2 = summation(10, 10, 10, 10);
console.log(result2);

const result3 = summation(10, 20, 30, 40);
console.log(result3);
