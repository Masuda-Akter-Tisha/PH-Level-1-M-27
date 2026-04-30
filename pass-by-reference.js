function firstSum (array1, array2) {
  array1[0] = 100;
  array2[0] = 200;
  let first = array1[0];
  let second = array2[0];
   return first + second; 
}
 
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];

console.log('befor calling function', num1, num2);

let result = firstSum (num1, num2);
console.log(result);

console.log('after calling function', num1, num2);


// function array (array1, array2) {
//     array1[0] = 30;
//   console.log(array1, array2);
// }

// let x = [10, 20];
// let y = ['lily', 'sunflower'];
// console.log(x, y);

//  array (x, y);
//  console.log(x, y);


