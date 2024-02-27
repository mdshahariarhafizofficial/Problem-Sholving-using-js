const arr = [2, 55, 88, 99, 500];
const squareArr = [];

for( let i = 0; i < arr.length; i++){
    let element = arr[i];
    let square = element*element;
    squareArr.push(square);
}
console.log(squareArr);