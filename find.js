const students = [
    {name:'halima', age: 23},
    {name:'shima', age: 33},
    {name:'sana', age: 20},
    {name:'sheza', age: 22},
    {name:'oafa', age: 15},
    {name:'maria', age: 39},
    {name:'sehnaz', age: 40}
]

// const student = students.find (std => std.name[0] === 's');
const student = students.find (std => std.age % 2 !== 0);
console.log(student);
