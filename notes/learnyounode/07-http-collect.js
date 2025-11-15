import https from "https";
import bl from "bl"; // Collecting an entire stream of data

const url = process.argv[2];
https.get(url, (res) => {
  // Collect all data from the server
  res.pipe(
    bl((err, data) => {
      if (err) {
        return console.error(err);
      }
      const str = data.toString();
      console.log(str.length);
      // console.log(str);
    }),
  );
});
