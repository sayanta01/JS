import https from "https";
import bl from "bl";

const results = [];
let count = 0;

function printResults() {
  for (let i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function getData(index) {
  https.get(process.argv[2 + index], (response) => {
    response.pipe(
      bl((err, data) => {
        if (err) return console.error(err);
        results[index] = data.toString();
        count++;

        if (count === 3) {
          printResults();
        }
      }),
    );
  });
}

for (let i = 0; i < 3; i++) {
  getData(i);
}

// Counting callbacks is one of the fundamental ways of managing async in Node
