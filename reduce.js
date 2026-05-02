const array = [1, 2, 3, 4, 5];
let sum1 = 0;
for (n of array) {
    sum1 = sum1 + n;
}
console.log(sum1);

const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce ((acc, curr) => {
//     return acc + curr;
// }, 0);
const sum = numbers.reduce ((acc, crr) => acc + crr, 0);
console.log(sum);
