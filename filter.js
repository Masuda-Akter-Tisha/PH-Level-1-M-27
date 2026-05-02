const numbers = [10, 33, 44, 60];
const evenNumber = numbers.filter (num => num % 2 === 0);
console.log(evenNumber);

const friends = ['maria', 'khadija', 'oafa', 'halima'];
// const frnd = friends.filter (fd => fd.length === 5);
const frnd = friends.filter (fd => fd[1] === 'a');
console.log(frnd);

const students = [
    {name:'halima', age: 23},
    {name:'shima', age: 33},
    {name:'sana', age: 20},
    {name:'sheza', age: 22},
    {name:'oafa', age: 15},
    {name:'maria', age: 39},
    {name:'sehnaz', age: 40}
]

const student = students.filter (std => std.age > 25 && std.name[0] === 's');
console.log(student);


