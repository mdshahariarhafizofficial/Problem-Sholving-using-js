let spech = "Lorem Ipsum is simply dummy text";

function spechChanger(spech){
    let char = '';
    for( let i = 0; i < spech.length; i++){
        let element  = spech[i];
        char = element+char;
    }
    return char;
};

let alienSpec = spechChanger("Hello Alien Fahad");
console.log(alienSpec);

let lang = spechChanger(spech);
console.log(lang);