let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let sum = 0;

for( let i = 0; i < arr.length; i++){
    let element = arr[i];
    sum = sum+element;
}
console.log(" The Summation is = ", sum);



function arraySum(numbers){
    sum = 0;
    for( let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        sum = sum+element;
    }
    return sum;
};
let numbers = [56, 80, 10, 23, 41];
let result = arraySum(numbers);
console.log(" The Summation is = ", result);


