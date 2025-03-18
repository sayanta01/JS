# https://www.youtube.com/watch?v=zD8CkabTJD0&list=PLUaw9xq0YUAG5H5JpjRkR4fHgNf4Qs5-t&index=2
# https://github.com/denysdovhan/wtfjs
![](https://cdn.hashnode.com/res/hashnode/image/upload/v1667197259026/ouTgP5uuj.png?auto=compress,format&format=webp)
Primitive values # Pass by value - Goes to Stack
- creates a copy of the value; even though they have the same value, they occupy different places in memory
- to change the value, it copies the value and changes the copy, not the original

Non-primitive values # Object references - Goes to Heap
- instead of copying, it creates references to the same object in the memory
- mutating the non-primitive value affects both variables since they reference the same object
- ask youself: whether this value is primitive or non-primitive, whether it's an object or not

const means you can not change the reference/pointer
# const obj = { name: "John" };
# obj.name = "Jane";  // Allowed, as we're changing the content
# obj = { name: "Alice" }; // Throw an error because the reference can't be changed

Arrays indexes like Object properties # Array behaves like object
- arrays are objects with indexed elements; arrays store ordered, objects unordered data
# const obj = {
#   name: "sayanta" # property: name, value: "sayanta"
#   age: 21
# }
# const b = a[0]; // RefErr: objects use property names, not numeric indexes

# let arr = [10, 20, 30] # Array has indexes
# arr[0] = 10 # index: 0, value: 10
# arr[1] = 20 # index: 1, value: 20

Function parameters are like variable assignments:
- non-primitive values are passed by reference, so functions can modify the original value
- calling function with parameters (passing values to function)
  follows the same logic as assigning one variable to another (primitive vs non-primitive)
