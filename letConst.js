// value can't be changed
const hubby = "Buffy Khan";
console.log(hubby);


// elements of an array can be changed
//push can be used to add elements in an array
const numbers = [12, 45];
numbers[1] = 88;
numbers.push(12);
console.log(numbers);


//error: can't reassign a const variable
// const numbers = [12, 45];
// numbers[1] = 88;
// numbers.push(12);
// numbers = ["Sunny", "Salman", "Bappi"];
// console.log(numbers);


let patientName = "Rahim Chacha";
patientName = "Fatema Khala";
console.log(patientName);


let sum = 0;
for (var i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log(i);