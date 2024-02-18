let num = [23, 12, 85, 45, 23, 56, 85];
let uniqNum = [];
for(let i = 0; i < num.length; i++){
    let element = num[i];
    let index = uniqNum.indexOf(element);
    if (index == -1) {
        uniqNum.push(element);
    }
};
console.log(uniqNum);


let name = ['Fahad', 'Rahim', 'Korim', 'Fahad', 'Korim'];
let uniqName = [];
for( let i = 0; i < num.length; i++){
    let element = name[i];
    let nameIndex = uniqName.indexOf(element);
    if( nameIndex == -1 ){
        uniqName.push(element);
    };
};
console.log(uniqName);

