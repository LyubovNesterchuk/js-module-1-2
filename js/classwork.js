// let i;
// for (let i = 6; i > 3; i--) { }
// console.log(i)


// for (i = 6; i > 3; i--) {}
// console.log(i)

// for (let i = 0; i < 9; i++) {
//   console.log(i);
  // more statements
// }

// console.log("Alice" < "alice");
// // true


// function add(a, b) {
//     const total = a + b;
//     return total;
// }

// const a = add(5, 6);
// console.log("a", a);
// // a 11


// ----------------------------------------------------------------------------------

// function calcBMI(height, weight) {
//     let numWeight = weight.replace(",", ".");
//     numWeight = Number.parseFloat(numWeight);
//     let numHeight = height.replace(",", ".");
//     numHeight =  Number.parseFloat(numHeight);
//     // const bmi = numWeight / (numHeight ** 2);
//     const bmi = numWeight / Math.pow(numHeight,2);
//     return bmi.toFixed(10);
// }
// const bmi = calcBMI("176,9", "1,8");
// console.log(bmi);

// ----------------------------------------------------------------------------

// const user = "Alice";
// for (let i = 0; i < user.length; i++){
//     console.log(user[i], i)
// }


// const uSer = "Philipe";
// for (let i = 0; i < user.length; i++){
//     if (uSer[i] === "i") {
//         break;
//     }
//     console.log(uSer[i], i)
// }


// console.log("before")
// let counter = 8;
// while (counter < 5) {
//     console.log(counter);
//     counter++;
//   }
// console.log("after")


// do {
//     console.log(counter);
//     counter++;
// } while (counter < 5)
 

// const n = 5;
// const m = 40;
// for (let i = n; i <= m; i--){
//     if (i % 5 === 0) {
//         console.log(i)
//     }
// }

// -------------------------------------------------------------

// const deadline = 0;
// if (deadline === 0) {
//     console.log("Today");
// } else if (deadline === 1) {
//     console.log("Tomorrow");
// } else if (deadline === 2) {
//     console.log("Overmorrow");
// } else {
//     console.log("Date in the future");
// }

// ---------------------------------------------------------------

// let message = "";
// switch(deadline) {
//     case 0:
//         message = "Today";
//         break;
//     case 1:
//         message = "Tomorrow";
//         break;
//     case 2:
//         message = "Overmorrow";
//         break;
//     default:
//         message = "Date in the future";
// }
// console.log(message);


// ----------------------------------------------------------------------------------------

// const option = 1;
// let message;
// switch(option) {
//     case 0:
//         message = "Ви зможете забрати товар завтра з 12.00 у нашому магазині";
//         break;
//     case 1:
//         message = "Кур'єр доставить посилку завтра з 9.00 по 14.00";
//         break;
//     case 2:
//         message = "Посилка буде відправлена сьогодні ";
//         break;
//     default:
//         message = "Вам передзвонить менеджер";
// }
// console.log(message);



// ------------------------------------------------------------------------------------------

// const sub = "free";
// let canConnect;
// if (sub === "pro" || sub === "vip") {
//     canConnect = true;
// } else {
//     canConnect = false;
// }
// console.log(canConnect);


// const sub = "pro";
// let canConnect = sub === "pro" || sub === "vip" ? true : false;
// console.log("canConnect", canConnect);



// ---------------------------------------------------------------------------------

// const isOnline = true;
// const isFriend = true;
// const isDnd = true; //don't distarbe

// const canOpenChart = isOnline && isFriend && !isDnd;
// console.log("canOpenChart", canOpenChart);

// if (!isDnd) {
//     console.log("canOpenChart");
// } else {
//     console.log("Oooops!");
// }

// const mute = isDnd ? "on" : "of";
// console.log(mute);



// ---------------------------------------------------------------------------------------

// let link = "https: my-site.com/about"
// if (!link.endsWith("/")) {
//     link += "/";
// }

// if (!link.endsWith("/") && link.includes("my-site")) {
//     link += "/";
// }

// link = !link.endsWith("/") && link.includes("my-site") ? link += "/" : link;
// console.log(link);




// ------------------------------------------------------------------------------------------

const min = 4;
const max = 9;
let total = 0;

// for (let i = min; i < max; i++){
//     if (!(i % 2)) {
//         total += 1;
//     }
// }
// console.log(total); // 5

// for (let i = min; i < max; i++){
//     if (i % 2 !== 0) {
//         console.log("if", i);
//         total += 1;
//         continue;
//     }
//     console.log(i);
// }
﻿
// classwork.js:209 4
// classwork.js:205 if 5
// classwork.js:209 6
// classwork.js:205 if 7
// classwork.js:209 8
// classwork.js:205 if 9
// classwork.js:209 10
// classwork.js:205 if 11
// classwork.js:209 12


// for (let i = min; i < max; i++){
//     if (i % 2 !== 0) {
//         continue;
//     }
//      console.log(i);
// }  // 4 6 8 10 12



// for (let i = min; i < max; i++){
//     if (i % 2 !== 0) {
//         continue;
//     }
//      total += i;
// }
// console.log(total); // 40

// --------------------------------------------------------------------------------


// const inputs = ['123', '', '456', null, '789'];

// for (let input of inputs) {
//   if (!input) { // Якщо пустий рядок або null
//     continue;
//   }
//   console.log(`Обробляємо: ${input}`);
// }

// ------------------------------------------------------------------------------------

// const user = "Alice";
// for (let i = 0; i <= user.length - 1; i++){
//     console.log(user[i], `user[${i}]`)
// }
   



// ----------------------------------------------------------------------------------

// const hours = 14;
// const minutes = 20;
// let time;
// if (minutes > 0) {
//   time = `${hours} год. ${minutes} хв.`;
// } else {
//   time= `${hours} год.`;
// };
 
// const time = minutes > 0 ? `${hours} год. ${minutes} хв.` : `${hours} год.`;

// console.log(time);