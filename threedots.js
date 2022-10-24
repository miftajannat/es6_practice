const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2);
console.log(allAges);


const num = [5, 6, 7, 8, 9];
const num2 = [10, 11, 12, 13, 14];
const num3 = [15, 16, 17, 18, 19];
const allNum = num.concat(num2).concat([5]).concat(num3);
const allNum2 = [...num, ...num2, 5, ...num3];
// [
//     5,  6,  7,  8, 9, 10,
//     11, 12, 13, 14, 5, 15,
//     16, 17, 18, 19
//   ]
const allNum3 = [...num, ...num2, 5, ...num3];
console.log(allNum);
console.log(allNum2);
console.log(allNum3);

// const roll = [12, 17, 19, 26, 29];
// const roll2 = [30, 32, 34, 36, 38];
// const roll3 = [40, 42, 44, 46, 48];
// // const allRoll = roll.concat(roll2).concat([5]).concat(roll3);
// const allRoll2 = [...roll, ...roll2, 5, ...roll3];
// console.log(allRoll2);


// 2d array with 3 rows
const roll = [12, 17, 19, 26, 29];
const roll2 = [30, 32, 34, 36, 38];
const roll3 = [40, 42, 44, 46, 48];
const allRoll = [roll, roll2, 5, roll3];
const allRoll2 = roll.concat(roll2).concat([5]).concat(roll3);
console.log(allRoll);
// [
// [ 12, 17, 19, 26, 29 ],
// [ 30, 32, 34, 36, 38 ],
// 5,
// [ 40, 42, 44, 46, 48 ]
// ]
console.log(allRoll2);
// [
//     12, 17, 19, 26, 29, 30,
//     32, 34, 36, 38,  5, 40,
//     42, 44, 46, 48
//   ]


const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [950, 4150, 550];
const maximum = Math.max(business, minister, sochib);
const maximum2 = Math.max(...takaPoisa);
console.log(maximum);
console.log(maximum2);

