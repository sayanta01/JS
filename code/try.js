// const array = [5, 1, 3, 2, 6];
// function binary(arr) {
//   return arr.toString(2); // converts numbers into different bases
// }
// const binaryArr = array.map(binary);
// console.log(binaryArr); // [ '101', '1', '11', '10', '110' ]

const array = [5, 1, 3, 2, 6];
function isOdd(arr) {
  return arr % 2; // converts numbers into different bases
}
const oddArr = array.filter(isOdd);
console.log(oddArr); // [ 5, 1, 3 ]
