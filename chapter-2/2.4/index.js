"use strict";
const data = [{
  "name": "liuyi",
  "age": "40",
  "sex": "female"
}, {
  "name": "xiaoming",
  "age": "32",
  "sex": "male"
}, ];

function generateReport(data) {
  const columns = Object.keys(data[0]);
  return {
    numRows: data.length,
    numColumns: columns.length,
    columnNames: columns
  }
}

const report = generateReport(data);
console.log('Number of rows:' + report.numRows);
console.log('Number of columns:' + report.numColumns);
console.log('Columns:' + report.columnNames.join(","));