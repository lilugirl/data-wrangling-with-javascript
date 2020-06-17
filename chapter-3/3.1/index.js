const fs = require('fs');
fs.readFile("./data/earthquakes.csv", "utf-8", (err, textFileData) => {
  if (err) {
    console.error("An error occurred!");
    console.log(err);
    return;
  }

  console.log(textFileData);
})