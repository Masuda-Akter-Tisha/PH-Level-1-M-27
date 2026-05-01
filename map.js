// 1 method
const array = [1, 2, 3, 4];

const double = [];

for (num of array) {
    double.push (num * 2);
}

console.log(double);

// 
const prices = [1, 2, 3];
const doubleIt = num => num * 5;
const doublePrice = prices.map (doubleIt);
console.log(doublePrice);


//
const number = [1, 2, 3, 4];

const doubles = number.map (function (num) {
    return num * 2 - 1;
})

console.log(doubles);

//
const studentRoll = [10, 33, 45, 230];

const newStudentRoll = studentRoll.map (roll => roll * 3 + 2);
console.log(newStudentRoll);

// 
const friends = ['mariam', 'khadija', 'oafa', 'halima'];
const firstLetter = friends.map (frnd => frnd[0]);
console.log(firstLetter);

// 
const products = [
    {name: 'iphone', price: 12000},
    {name: 'tablet', price: 25000},
    {name: 'intel', price: 2000},
]

const price = products.map (item => item.price * 13);

// const price2 = products.map (nam => nam.name.toUpperCase ());
const price2 = products.map ((nam, index, productsArray) => {
    const name = nam.name;
    const cases = name.toUpperCase ();
    console.log(index, cases, productsArray);
    
    return cases;
})
console.log(price2);
