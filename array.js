//!  https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/05_Day_Arrays/05_day_arrays.md#exercise-level-1
const itCompanies = [];
itCompanies[0] = "Facebook";
itCompanies[1] = "Google";
itCompanies.push("Microsoft");
itCompanies.push("Apple");
itCompanies.push("IBM");
itCompanies.push("Oracle");
itCompanies.push("Amazon");

console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0], itCompanies[1]);
console.log(itCompanies[itCompanies.length - 1]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);

//! Print out each company

// for (let i = 0; i < itCompanies.length; i++) {
//   console.log(itCompanies.length(1));
// }
itCompanies.forEach((i) => {
  console.log(i);
});
//! Change each company name to uppercase one by one and print them out

itCompanies.forEach((i) => {
  console.log(i.toLocaleUpperCase());
});

//!Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

// console.log(
//   `${itCompanies.slice(0, 6)} and ${
//     itCompanies[itCompanies.length - 1]
//   } are big IT companies.`
// );
//!Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let companies = prompt("enter your companies ?");

let index = itCompanies.indexOf(companies);
if (index == -1) {
  console.log("not found");
} else {
  console.log(companies);
}

// for (let i = 0; i < itCompanies.length; i++) {
//   if ((i == companies[i]) == companies) {
//     console.log(companies[i]);
//   } else {
//     console.log("not fround");
//   }
// }
//! Filter out companies which have more than one 'o' without the filter method
// console.log(itCompanies[0].split(""));
// for (let i = 0; i < itCompanies.length; i++) {
//   if (itCompanies[i].includes("o", "o")) {
//     console.log(itCompanies[i]);
//   }
// }

//! Sort the array using sort() method
// itCompanies[0] = "Facebook";
// itCompanies[1] = "Google";
// itCompanies.push("Microsoft");
// itCompanies.push("Apple");
// itCompanies.push("IBM");
// itCompanies.push("Oracle");
// itCompanies.push("Amazon");

const number = ["32", "1", "6", "7", "9", "4"];

console.log(itCompanies.sort());
console.log(number.sort());

//!Reverse the array using reverse() method
// console.log(itCompanies.reverse());

// -----
console.log(itCompanies[0].split("").reverse().join("").concat("cansu"));

//!Slice out the first 3 companies from the array

// console.log(itCompanies.splice(0, 3));

//!Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length));
// console.log(itCompanies.slice(4, 7));

//!Slice out the middle IT company or companies from the array
// itCompanies.push("Clarusway");
// console.log(itCompanies);
myFunction = (a) => {
  console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
};
// itCompanies.length % 2
//   ? itCompanies[Math.floor(itCompanies.length / 2)]
//   : itCompanies[itCompanies.length / 2];
//! Remove the first IT company from the array
console.log(itCompanies.shift());
console.log(itCompanies);

//!Remove the middle IT company or companies from the array

console.log(itCompanies.indexOf(myFunction(itCompanies)));
console.log(itCompanies);
console.log(
  itCompanies.splice(itCompanies.indexOf(myFunction(itCompanies)), 1)
);
//!Remove all IT companies

console.log(itCompanies);
let i = itCompanies.length;
console.log(itCompanies);
while (i > 0) {
  itCompanies.shift();
  i--;
  console.log(itCompanies);
}
