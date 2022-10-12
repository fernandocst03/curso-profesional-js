// closures
// los clousures son funciones que regresan funciones

(function () {
  let color = "green";

  function printColor() {
    console.log(color);
  }

  printColor();
})();

// Funciones que regresan funciones
function makeColorPrinter(color) {
  let colorMessage = `The color is ${color}`;

  return function () {
    console.log(colorMessage);
  };
}

let greenColorPrinter = makeColorPrinter("green");
console.log(greenColorPrinter());

// variables "privadas"
const counter = {
  count: 3,
};
console.log(counter.count);
counter.count = 99;
console.log(counter.count);
