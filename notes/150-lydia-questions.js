// # 2/day
// https://github.com/lydiahallie/javascript-questions

// 4: Type Coercion, Type Conversion
// 5: Bracket notation evaluates the expression inside [first]
// 6: When you change one object, you change all of them
// 8: Static methods are designed to live only on the constructor in which they are created
//    and cannot be passed down to any children or called upon class instances
// 10: Everything besides primitive types are objects. A function is a special type of object
// 11:?
// 12: When using new, this refers to the new empty object we create
//     However, if you don't add new, this refers to the global object!
// 13: Capturing - Target - Bubbling
// 14:?

const nums = [0, 1, 0, 3, 12];

let j = 0; // Pointer for placing non-zero elements

// Move non-zero elements forward
for (let i = 0; i < nums.length; i++) {
  if (nums[i] !== 0) {
    nums[j] = nums[i];
    j++;
  }
}

// Fill the rest with zeroes
while (j < nums.length) {
  nums[j] = 0;
  j++;
}

console.log(nums);
