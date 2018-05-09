// let mul = x * y;
// if (mul > 70) {
//     mul = 70;
// }
let x = 10, y = 20;
const mul = Math.min(x * y, 70);
console.log(mul);

// if condition vs object
// let x;
// if (str === 'one') {
//     x = 1;
// } else if (str === 'two') {
//     x = 2;
// } else if (str === 'three') {
//     x = 3;
// }

let str = "three";
const num = {
    one: 1,
    two: 2,
    three: 3
}[str];

console.log(num);
