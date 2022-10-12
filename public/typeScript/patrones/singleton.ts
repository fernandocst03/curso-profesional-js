import singleton from './singleton2';
const a = singleton.getInstance();
const b = singleton.getInstance();

console.log(a === b); // true