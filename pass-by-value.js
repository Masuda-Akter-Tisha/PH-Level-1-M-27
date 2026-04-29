function multiply (a, b) {
    a = a - 5;
    b = b + 30;
    console.log(a, b);
    const add = a * b;
    return add;   
}
let x = 10;
let y = 20;
console.log('before calling', x, y);

let result = multiply (x, y);
console.log(result);

console.log('after calling', x, y);