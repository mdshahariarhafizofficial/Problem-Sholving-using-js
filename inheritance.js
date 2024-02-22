class FatherName{
    constructor(FatherName){
        this.FatherName = "Jasim Uddin";
    }
}
class Student extends FatherName{
    constructor(sName, sID){
        super();
        this.name = sName;
        this.id = sID;
    }
}

const studnt1 = new Student("Fahad", 643800);
console.log(studnt1);
const studnt2 = new Student("Hafiz", 643800);
console.log(studnt2);

class SuperCar{
    constructor(){
        this.SupCar = "Lamborgini CN";
    }
}

class Car extends SuperCar{
    constructor(model, name){
        super();
        this.Model = model;
        this.Name = name;
    }
}

const car1 = new Car("B M W", "M 5");
console.log(car1);
