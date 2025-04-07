/*
Implement four functions
The first three will calculate the volume of the individual shapes:

sphereVolume()will calculate the volume of a sphere given a radius
coneVolume() will calculate the volume of a cone given a radius and a height
prismVolume() will calculate the volume of a prism given a height, a width, and a depth
*/

const sphereVolume = radius => {
  return Math.round((4 / 3) * Math.PI * (radius ** 3) * 100) / 100;
};

const coneVolume = (radius, height) => {
  return Math.round(Math.PI * (radius ** 2) * (height / 3) * 100) / 100;
};

const prismVolume = (baseLength, baseWidth, height) => {
  return Math.round((baseLength * baseWidth) * height * 100) / 100;
};

console.log(prismVolume(9, 7, 13));