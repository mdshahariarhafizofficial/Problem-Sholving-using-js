const age = [34, 23, 75, 98, 76, 21, 12];
let max = age[0];

for( let i = 0; i < age.length; i++){
    let element = age[i];
    if( element > max){
        max = element;
    };
};
console.log("Max Value is =", max);

let arr = [500, 40, 780, 120, 35, 10, 240, 324];
let small =arr[0];
for( let i = 0; i < arr.length; i++){
    let element = arr[i];
    if(element < small){
        small = element;
    }
}
console.log("Small Value is =",small);