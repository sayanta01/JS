import fs from "fs";

export default function modular(dir, ext, callback) {
  fs.readdir(dir, (err, files) => {
    // Error-First Callback Pattern
    // it is idiomatic to check for errors & do early-returns within callback functions
    if (err) {
      return callback(err);
    }
    // ... no error, continue doing cool things with `data`
    // all went well, call callback with `null` for the error argument
    const filtered = files.filter((file) => file.endsWith(ext));
    callback(null, filtered);
  });
}
