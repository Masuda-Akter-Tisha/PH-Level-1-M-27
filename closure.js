const name = function () { //can be stored in a variable
    console.log('Tisha');
}

function greet (fn) { //passing a function as a parameter
    fn ();
}

greet (name);

//
const fruits = function () {
   return function price () {
    console.log(`${200} Taka`);
  }
   
}

const output = fruits ();
// console.log('price function:', output);
output ();

//
function counter (owner) {
    let count = 0;
    function increment () {
        count ++;
        console.log('value of count:', owner, count);
    }
    return increment;
}
const count1 = counter ();
// console.log(result);
count1 ();
count1 ();
