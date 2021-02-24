const items = require('../assets/data');

exports.handler = async (event, context, cb) => {
  return {
    headers: {
      'Accesss-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: JSON.stringify(items),
  };
};
