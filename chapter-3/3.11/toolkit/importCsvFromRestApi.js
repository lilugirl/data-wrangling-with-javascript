const request = require('request-promise');
const papa = require('papaparse');

function importCsvFromRestApi(url) {
  return request.get({
    uri: url,
    json: false
  }).then(response => {
    const result = papa.parse(response, {
      header: true, // 将数据的第一行识别为标题
      dynamicTyping: true // 启用Papa Parse的自动类型转换
    });

    return result.data;

  })
}

module.exports = importCsvFromRestApi;