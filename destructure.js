const man = {
    name: "William",
    age: 55,
    job: "Police",
    sellary: 50000,
}

let manAge = man.age;
console.log(manAge);

let {job, sellary} = man;
console.log(job, sellary);

const arr = ["Rahim", "Korim", "Jabbar", "Mokbul"];
let [firstArr, secondArr] = arr;
console.log(firstArr, secondArr);