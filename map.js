const add1 = value => value + 1;

const numbers = [1,2,3,4,5];
const r = numbers.map(add1);
console.log(r);

//mapping operation manually

const num = [10,20,30,40,50];

const func = value => value + 5;

const result = [];
for (let element of num) {
    result.push(func(element));
}

console.log(result);


//example
const people = [
    { name: 'Donald Knuth', born: 1938 },
    { name: 'Vin Cerf', born: 1943 },
    { name: 'Hal Abelson', born: 1947 },
    { name: 'Alan Turning', born: 1912 },
    { name: 'John von Neumann', born: 1903 },
    { name: 'Thomas H. Cormen', born:1956 },
    { name: 'Peter Norvig', born: 1956 },
    { name: 'Jon Bentley', born: 1953 },
    { name: 'Grady Booch', born: 1955 },
    { name: 'Randal Bryant', born: 1952 },
];

const bornToAge = ({ name, born }) => ({ name, age: 2021 - born});

const res = people.map(bornToAge);
console.log(res)