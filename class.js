class Mobile{
    constructor(brand, model, ram, os, camera){
        this.brand = brand;
        this.model = model;
        this.ram = ram;
        this.os = os;
        this.canera = camera;
    }
}

const infinix = new Mobile("infinix", "smart", "16 gb", "Andriod", "60 Mp");
console.log(infinix);

const itel = new Mobile("itel", "S23", "16gb", "Andriod", "60 Mp");
console.log(itel);

const iPhone = new Mobile("iPhone", "15 Plus", "16gb", "iOS", "120 Mp");
console.log(iPhone);
