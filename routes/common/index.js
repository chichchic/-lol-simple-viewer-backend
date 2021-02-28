const request = require("request");

exports.makePromiseRequest = function (uri, token) {
  return new Promise((resolve, reject) => {
    request(
      {
        uri,
        method: "GET",
        headers: {
          "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
          "X-Riot-Token": token,
        },
      },
      function (err, res, body) {
        if (err) {
          throw err;
        }
        resolve(body);
      }
    );
  });
};
