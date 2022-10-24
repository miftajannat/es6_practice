class Student {
    constructor(sName, sId) {
        this.name = sName;
        this.id = sId;
        this.school = "Kolimunnesa School";
    }
}
const student = new Student("Buffy", 1);
const student2 = new Student("Hridoy", 2);
const student3 = new Student("Badhruddouza", 3);
console.log(student, student2, student3);
//Student { name: 'Buffy', id: 1, school: 'Kolimunnesa School' } Student { name: 'Hridoy',id: 2, school: 'Kolimunnesa School' } Student { name: 'Badhruddouza', id: 3, school: 'Kolimunnesa School' }