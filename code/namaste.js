// Ep-3
getName();
console.log(x);
var x = 7;
function getName() {
  console.log("Namaste JS");
}
console.log(getName);

// Ep-14
// parameter == placeholder, when you call the function, you replace it with actual values (arguments)
function printStr(str, cb) {
  setTimeout(function () {
    console.log(str);
    cb();
  }, 1000);
}
function printAll() {
  printStr("A", function () {
    // callback function, it's passed as an argument to be executed later
    printStr("B", function () {
      printStr("C", function () {});
    });
  });
}
printAll();

// Ep-12
// Q: Print 1 after 1 sec, 2 after 2 sec till 5 # tricky interview question
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 3000); // after 3000ms, it puts the function into the call stack and runs it
  }
  console.log("Namaste JS");
}
x(); // prints 6 only because of closure

function x() {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, i * 4000);
    }
    close(i);
  }
}
x();

// Ep-19
// Find max inside array: Non functional programming way:
const array = [5, 1, 3, 2, 6];
function findMax(array) {
  let max = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
console.log(findMax(array));

// Misc
//setTimeout(function() {
//  console.log("timer");
//}, 3000);
//
//function x(y) {
//  // x runs first, then calls the y function passed as a parameter
//  console.log("x");
//  y();
//}
//
//x(function y() {
//  console.log("y");
//});
