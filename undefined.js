// undefined value

let data;
// console.log(data);

const sum = (num1, num2) => {
    console.log(num1, num2);
    const add = num1 + num2;
    return add;
}

const result = sum (10);
//  console.log(result);

const student = {
    name: 'kathal',
    age: 5,
    salary: null,
}

delete student.name
console.log(student.name);
// console.log(student.category);


const fish = ['Elish', 'Katla', 'Roi'];
delete fish[0];
 console.log(fish[0]);
 
//  console.log(typeof undefined);
 console.log(typeof null);
 