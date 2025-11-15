import fs from "fs"
const filePath = process.argv[1];

// Buffer objects are Node's way of efficiently representing arbitrary arrays of data, whether it be ascii, binary or some other format
const buffer = fs.readFileSync(filePath, "utf8"); // Buffer object containing the complete contents of the file

// Buffer objects can be converted to strings by simply calling the toString() method on them e.g. const str = buf.toString()
// console.log(buffer.toString());

// Count the number of newlines in a string
const lines = buffer.split("\n"); // Split by newline
const newLine = lines.length - 1; // Number of \n
console.log(newLine);

// Delimiter = Separator
