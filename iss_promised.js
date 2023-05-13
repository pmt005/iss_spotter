const request = require('request-promise-native');



/*
 * Requests user's ip address from https://www.ipify.org/
 * Input: None
 * Returns: Promise of request for ip data, returned as JSON string
 */
const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`);
};

const fetchISSFlyOverTimes = function(body) {
  const jsonObj = JSON.parse(body);
  const coords = {
    latitude: jsonObj.latitude,
    longitude: jsonObj.longitude
  };
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;
  return request(url);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then(body => {
      const jsonObj = JSON.parse(body);
      const passOverTimes = jsonObj.response;
      return passOverTimes;
    });
  
};

module.exports = { nextISSTimesForMyLocation };