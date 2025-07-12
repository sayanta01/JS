https://playcode.io/javascript/methods
https://doesitmutate.xyz/
![80/20](https://public-files.gumroad.com/img9k2mfcg89l3cs9qa0tjs1wvfp)

# Array Methods

## To-Know

- Resizable and can contain a mix of different data types
- Elements cannot be accessed using arbitrary strings as indexes
- Shallow copy by default
- Know what data type you'll get back

## Mutating

shift(), unshift()

splice(start, deleteCount, item1, item2) - Join the ends of two pieces

- Changes the original array by removing or replacing and adding new items in place
  <!-- const lang = ["Python", "JavaScript", "Java", "C", "Go"]; -->
  <!-- const deleted = lang.splice(2, 1, "Ruby", "Kotlin"); // returns only the deleted elements -->

sort() – Converts elements into strings, then sorts by Unicode (ascending by default)

## Non-Mutating

- flat(), split()??
  slice(start, end) - Returns a shallow copy of a portion of an array or string (start is inclusive, end is exclusive)

JSON.stringify: Converts JS object into JSON string & JSON.parse does the opposite

- Because the client and server communicate over HTTP, which is text-based protocol
- localStorage only stores strings, not objects (2nd usage of JSON.stringify)

[](https://youtu.be/R8rmfD9Y5-c?si=5hOnH1vRqB3uiqSR)
const items = [
{ name: "Bike", price: 100 },
{ name: "TV", price: 200 },
{ name: "Album", price: 10 },
{ name: "Book", price: 5 },
{ name: "Computer", price: 1000 },
{ name: "Keyboard", price: 25 },
];

```js
// Iteration Methods 🔄
const itemName = items.map((item) => {
  return item.name; // return required to build new array
});

const filteredItems = items.filter((item) => {
  return item.price <= 100;
});

const itemMap = items.reduce((acc, item) => {
  acc[item.name] = item.price;
  return acc;
}, {});

// Executes a provided function once for each array element (returns nothing; side effects only)
items.forEach((item) => {
  console.log(item.name); // return not required
});

// Questioner❓
const foundItem = items.find((item) => {
  return item.name == "Book";
});

const hasInexpensiveItems = items.some((item) => {
  return item.price <= 100;
});

const includesTwo = [1, 2, 3, 4, 5].includes(2); //
```

# Object Methods

- freeze() - Freezing an object is the highest integrity level that JavaScript provides
- seal() - New properties cannot be added, existing properties cannot be removed
  Values of existing properties can still be changed as long as they are writable
- assign(target, source) copies properties from source(s) to target??

# Both

toString - Controls how value is stringified

- Converts numbers to different bases
- Returns object's string representation
