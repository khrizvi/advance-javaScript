//array object property
const friends = [
    {name: 'Rony', age: 19},
    {name: 'Shoaib', age: 28},
    {name: 'Rogel', age: 25},
    {name: 'Prity', age: 21},
    {name: 'Rizvi', age: 20}
]
const names = friends.map(element => element.name);
const ages = friends.map(x => x.age);
const filterBigger = friends.filter(a => a.age > 21)
const findBigger = friends.find(p => p.age > 21)
console.log(findBigger);