const student = [
    { id: 643800, name: "Hafiz", age: 22},
    { id: 653670, name: "Rohim", age: 25},
    { id: 646788, name: "Korim", age: 32},
    { id: 123800, name: "Jamal", age: 42}
];

let nameArray = [];
for( let i = 0; i < student.length; i++ ){
    let element = student[i];
    // console.log(element);
    nameArray.push(element.name);
};
console.log(nameArray);

let names = student.map( element => element.name );
let ids = student.map( element => element.id);
let findAge = student.filter( element => element.age >= 30);
console.log(names);
console.log(ids);
console.log(findAge);
