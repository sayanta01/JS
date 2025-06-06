const reverse = (string) => {
  return string.split("").reverse().join("");
};

const average = (array) => {
  const reducer = (sum, item) => {
    console.log("hello", sum, item);
    return sum + item;
  };

  return array.length === 0 ? 0 : array.reduce(reducer, 0) / array.length; // Average = sum / n
};

export default {
  reverse,
  average,
};

// console.log(reverse("react"));
// console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9]));
