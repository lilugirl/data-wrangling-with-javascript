const file = require("./file.js");

//
// 用于导入JSON文件的工具包函数
//
function importJsonFile(filePath) {
  return file.read(filePath).then((textFileData) => {
    return JSON.parse(textFileData);
  });
};

module.exports = importJsonFile