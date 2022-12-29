const request = require('request'); 
const fetchMyIP = function(callback) {
  const url = 'https://api.ipify.org?format=json'
  request(url, (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const myIp = JSON.parse(body).ip;
    callback(null, myIp);
  });
};

module.exports = { fetchMyIP };