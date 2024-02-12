let pra = `Lorem   Ipsum is simply dummy text of the printing and ypesetting industry.    Lorem Ipsum has been the industry's standard`;

console.log(pra.length);
let count = 0;

for( let i = 0; i < pra.length; i++ ){
    let element = pra[i];
    if( element == " " && pra[i-1] != " "){
        count++;
    }
};
console.log(count);