const add = (n1, n2) => n1+n2;
let result1 = add(5, 10);

const give5 = () => 5;
let result2 = give5();

const sum = (arr) => {
    let sum = 0;
    for( let i = 0; i < arr.length; i++){
        let element = arr[i];
        sum = sum+element;
    }
    return sum;
}
const arr = [10, 20, 30, 50];
let result3 = sum(arr);

console.log(result1);
console.log(result2);
console.log("Sum = ",result3);