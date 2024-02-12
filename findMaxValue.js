let business = 18000;
let frelancer = 16000;
let worker = 10000;

if (business > frelancer && business > worker) {
    console.log("Business is Bigger");
}else if( frelancer > business && frelancer > worker ){
    console.log("Frelancer is Bigger");
}else{
    console.log("Worker is Bigger");
};

let findMax = Math.max(business, frelancer, worker);
console.log(findMax);