// index.js

const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

/*
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

// index.js

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

