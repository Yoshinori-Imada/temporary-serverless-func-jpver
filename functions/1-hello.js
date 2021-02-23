// domain/.netlify/functions/1-hello
// exports
// const person = { name: 'john' };

exports.handler = async (event, contex, cb) => {
  return {
    statusCode: 200,
    body: 'Our First netlify Function Example',
  };
};
