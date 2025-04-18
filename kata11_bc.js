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

const prismVolume = (height, width, depth) => {
  return Math.round((height * width) * depth * 100) / 100;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
console.log(prismVolume(3, 4, 5) === 60);


const totalVolume = solids => {
  let volume = 0;

  for (const shape of solids) {
    if (shape.type === "sphere") {
      volume += sphereVolume(shape.radius);
    }
    if (shape.type === "cone") {
      volume += coneVolume(shape.radius, shape.height);
    }
    if (shape.type === "prism") {
      volume += prismVolume(shape.height, shape.width, shape.depth);
    }
  }
  return volume;
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);