import modular from "./05-mymodule.js";

const dir = process.argv[2];
const ext = process.argv[3];

modular(dir, ext, (err, files) => {
  if (err) {
    return console.error("Error:", err);
  }
  files.forEach((file) => console.log(file));
});

// The callback function must be called using the idiomatic node(err, data) convention 💡 idiomatic code == natural style
// This convention demands that unless there's an error, the first argument passed to the callback will be null, and the second will be your data

// https://youtu.be/efHxgHSZ_Bo?si=HjnbPwGd4COsFDDQ
// https://github.com/ryanmcdermott/clean-code-javascript // idiomatic.js
