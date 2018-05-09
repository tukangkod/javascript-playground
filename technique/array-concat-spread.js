const one = ['a', 'd', 'g'];
const two = ['b', 'e', 'h', 'j'];
const three = ['c', 'f', 'i', 'k', 'l'];

// spread concat
const alphabet = [...one, ...two, ...three];
console.log(alphabet);

// sort
console.log(alphabet.sort());
