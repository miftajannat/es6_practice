class Parent {
    constructor() {
        this.fatherName = "Buffy";
    }
}
class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    //{ fatherName: 'Buffy', name: 'Iccha' }
    getFullName() {
        return this.name + " " + this.fatherName;
    }
    //Prerna Buffy Child
}

const baby = new Child("Hrida");
const baby2 = new Child("Prerna");
console.log(baby.getFullName(), baby2);