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
        console.log('The counter master:', owner, 'and value of count:', count);
    }
    return increment;
}
const rahimStation = counter ('Rahim');
// console.log(result);
rahimStation ();
rahimStation ();
rahimStation ();
rahimStation ();

const karimStation = counter ('karim');
karimStation ();
karimStation ();
karimStation ();