/* const zelda = {
  name: "Zelda",
};
zelda.saludar = function () {
  console.log(`Hola. Soy ${this.name}`);
};
zelda.saludar();

const link = {
  name: "Link",
};

link.saludar = function () {
  console.log(`Hola. Soy ${this.name}`);
};

link.saludar();
 */

const heroMethods = {
  saludar: function () {
    console.log(`Hola. Soy ${this.name}`);
  },
};

function hero (name){
  const hero = {
    name: name
  };
  hero.saludar = heroMethods.saludar;
  return hero;
}

const zelda0 = hero('Zelda');
zelda.saludar();
const link0 = hero('Link');
link.saludar();


// Object.create

const heroMethods2 = {
  saludar: function () {
    console.log(`Hola. Soy ${this.name}`);
  },
};

function hero(name) {
  const hero = Object.create(heroMethods);
  hero.name = name;
  
  return hero;
}

const zelda1 = hero("Zelda");
zelda.saludar();
const link1 = hero("Link");
link.saludar(); 



// prototype 
function Hero(name) {
  const hero = Object.create(Hero.prototype);
  hero.name = name;

  return hero;
}

Hero.prototype.saludar = function () {
  console.log(`Hola. Soy ${this.name}`);
};

const zelda = Hero("Zelda");
zelda.saludar();
const link = Hero("Link");
link.saludar(); 


// usando new y this
function Hero(name) {
  // this const hero = Object.create(Hero.prototype);
  this.name = name;
}

Hero.prototype.saludar = function () {
  console.log(`Hola. Soy ${this.name} usando new`);
};

const zelda2 = new Hero("Zelda");
zelda.saludar();
const link2 = new Hero("Link");
link.saludar();



// * Herencia prototipal

function Hero2 (name){
  this.name = name;
}

Hero2.prototype.saludar = function () {
  console.log(`Hola. Soy ${this.name}`);
}

const halo = new Hero2('Halo');

// propiedades de la instancia
console.log(halo.name);

// propiedades del la "clase"
console.log(halo.saludar);

// propiedades heredadas ej: toString
console.log(halo.toString);

// hasOwnProperty - verifica si la propiedad es propia de la instancia
console.log(halo.hasOwnProperty('name'));