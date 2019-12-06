const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned IP:', ip);
});

fetchCoordsByIP("162.245.144.188", (error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  } else {
    console.log("data", coords);
  }
});
const exampleCoords = { longitude: '-49.27670', latitude: '-49.27670' };
fetchISSFlyOverTimes(exampleCoords, (error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log("data", coords);
});