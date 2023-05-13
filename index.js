// index.js

const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
  return ip;
});



let ip = "50.66.151.66";

fetchCoordsByIP(ip , (error, coordinates) => {
  
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned Coordinates:' , coordinates);
 
  return coordinates;
});

let c = { latitude: '49.27670', longitude: '-123.13000' };

fetchISSFlyOverTimes(c , (error, response) => {
  
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Flyover times:' , response);
 
  return response;
});
*/
