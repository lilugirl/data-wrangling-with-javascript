const importCsvFile = require('./toolkit/importCsvFile');

importCsvFile('./data/earthquakes.csv').then(data => {
  console.log(data);
}).catch(err => {
  console.error("An error occureed.");
  console.error(err.stack);
})