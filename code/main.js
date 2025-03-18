const arr = [5, 1, 3, 2, 6];
function isOdd(arr) {
  return arr % 2; // condition
}
const isOdd = arr.filter(isOdd);
console.log(isOdd); // [ 5, 1, 3 ]
const isOdd = arr.filter((x) => x % 2); // other way of writing

// first name of all people whose age is less than 30
const users = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 29 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

// function chaining
//const output = users
//  .filter((user) => user.age < 30) // (user) == parameter of anonymous/arrow function
//  .map((user) => user.firstName);
//console.log(output);

const output = users.reduce((accu, curr) => {
  if (curr.age < 30) {
    accu.push(curr.firstName);
  }
  return accu;
}, []);
console.log(output);
