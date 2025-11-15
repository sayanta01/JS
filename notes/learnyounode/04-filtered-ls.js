import fs from "fs";

const path = process.argv[2];
const ext = process.argv[3];

function doSomething(path, ext) {
  setTimeout(() => {
    fs.readdir(path, "utf8", (err, files) => {
      if (err) throw err;
      // Note that the second argument will not come prefixed with a '.'
      const filtered = files.filter((file) => file.endsWith(ext));
      console.log(filtered);
    });
  }, 1000);
}

doSomething(path, ext);
