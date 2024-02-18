function feetToMile(feet){
    let mile = feet/5280;
    return mile;
};

let result = feetToMile(1);
console.log("Mile = ",result);