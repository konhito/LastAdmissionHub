/* eslint-disable @typescript-eslint/no-array-constructor */
let name1 = prompt("Enter your name", "john doe");
console.log(name1);

let text = "";
let i = 0;
while (i < 5) {
  text += "number is " + i + "/n";
  i++;
}
console.log(text);

let car = {
  name: "BMW",
  model: "x5",
  color: "Black",
  start: function () {
    console.log("Car is started");
  },
};

car.start();

console.log(Object.keys(car));
console.log(Object.values(car));

for (let key in car) {
  console.log(key, car[key]);
}

console.log(Math.random());

console.log(Math.max(1, 2, 3, 4, 5));

function greet(name) {
  return "Hello" + name;
}
let greet2 = (name) => {
  return "Hello" + name;
};
let fruit = ["apple", "Ball", "mago"];
console.log(fruit);

let numer = new Array(1, 2, 3, 4);
console.log(numer);
console.log(numer.indexOf(3));
console.log(numer.length);
