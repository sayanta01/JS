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
