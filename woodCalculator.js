function woodCalculator(chair, table, bed) {
    let chairWood = chair*1;
    let tableWood = table*3;
    let bedWood = bed*5;
    let totalWood = chairWood+tableWood+bedWood;
    return totalWood;
}
let myFurniture = woodCalculator(5, 1, 3);
console.log("Total Wood = ", myFurniture);

let needWood = woodCalculator(10, 13, 4);
console.log("Total Wood = ", needWood);










