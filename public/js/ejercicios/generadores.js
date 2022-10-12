function* generated() {
  console.log("start");
  yield 1;
  yield 2;
  yield 3;
  console.log("finish");
}

const gen = generated();
console.log(gen.next());

// generadores infinitos
function* idMarker() {
  let id = 0;
  while (true) {
    yield id;
    id++;
  }
}


// cuando llamamos next tambien podemos pasar valores que la funcion recibe 
function* idMarker2() {
  let id = 1;
  let reset;
  while (true) {
    reset = yield id;
    if(reset) {
      id = 1;
    } else {
      id++;
    }
  }
}

// algoritmo de fibonacci
function* fibonacci() {
  let a = 1;
  let b = 1;
  while(true){
    const netxNumber = a + b;
    a = b;
    b = netxNumber;
    yield netxNumber;
  }
}
console.log(fibonacci().next());
console.log(fibonacci().next());