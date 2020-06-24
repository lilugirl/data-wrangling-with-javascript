const papa = require('papaparse');
const file = require('./file.js');

function importCsvFile(filePath) {
  return file.read(filePath).then(textFileData => {
    const result = papa.parse(textFileData, {
      header: true, // 将数据的第一行识别为标题
      dynamicTyping: true // 启用Papa Parse的自动类型转换
    });

    return result.data;
  });
};


module.exports = importCsvFile;