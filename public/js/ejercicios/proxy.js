const target = {
  rojo: 'rojo',
  verde: 'verde',
  azul: 'azul'
}

const handler = {
  get(obj, prop){
    if(prop in obj){
      return obj[prop]
    } 
    const sugerencia = Object.keys(obj).find(key => {
      return Levenshtein.get(key, prop) <= 3
    })
    if(sugerencia){
      return `Quizás quisiste decir ${sugerencia}`
    }
    return obj[prop];
  }
}
const p = new Proxy(target, handler)