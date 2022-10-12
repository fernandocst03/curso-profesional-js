console.log("hola hola ");

function add(a:number, b:number){
  return a + b;
}
add(2,3); 

// boolean
let isCool: boolean = true;

// number
let n2: number = 56;
let n1: number = 4;
let sum = n1 + n2;

// string
let str: string = "Hello World";
let msg = `mensaje ${str}`;

// array
let people: String[] = ["Isabel", "Nicole", "Raul"];
people.push("9000"); // error porque no es un string

let peopleAndNumbers: Array< string | number > = ["Isabel", "Nicole", "Raul", 333];
peopleAndNumbers.push("9000"); // no error porque es un string o un number

// enum
enum Color {
  Red = "Rojo", 
  Green = "Green",
  Blue = "Blue",
};
let c: Color = Color.Green;
console.log(c); // Green

// any
let comodin: any = "joker";
comodin = { type: "Wildcard" };

// object
let someObject: object = { type: "Wildcard" };


// funciones
function add2(a: number, b: number): number {
  return a + b;
}
const sum2 = add2(4, 6); // 10

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return b + a;
  };
}
const addFour = createAdder(4);
const fourPlus6 = addFour(6); // 10

function fullName(firstName: string, lastName: string = "smith"): string {
  return `${firstName} ${lastName}`;
}
const richard = fullName("Richard"); // Richard Smith


// interfaces
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
}

interface Rectangulo { 
  ancho: number;
  alto: number;
  color?: Color;
}
let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}
const areaRect = area(rect); // 24

rect.toString = function () {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`; // Un rectangulo Rojo
}

