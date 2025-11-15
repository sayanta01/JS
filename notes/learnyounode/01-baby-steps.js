// Read command-line arguments via the global process object
// All elements of process.argv are strings and you may need to coerce them
// First two values are reserved for system info by Node

const args = process.argv.slice(2);
const sum = args.reduce((acc, val) => acc + Number(val), 0);
console.log(sum);
