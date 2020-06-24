'use strict';

const papa = require('papaparse');
const fs = require('fs');


function read(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', function (err, textFileData) {
      if (err) {
        reject(err);
        return;
      }

      resolve(textFileData);
    });
  });
}

function importCsvFile(filePath) {
  return read(filePath).then(textFileData => {
    const result = papa.parse(textFileData, {
      header: true,
      dynamicTyping: true
    });

    return result.data;
  });
}

function exportToMongoDB(db, collectionName, data) {
  return db[collectionName].insert(data);
}

const mongo = require('promised-mongo');

const db = mongo('localhost:27017/earthquakes', ['largest_earthqukes']);

importCsvFile('./data/earthquakes.csv').then(data => exportToMongoDB(db, 'largest_earthquakes', data)).then((res) => {
  console.log('导入成功 res', res);
  db.close();
}).catch(err => {
  console.error("An error occurred.");
  console.error(err.stack);
})