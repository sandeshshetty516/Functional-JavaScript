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

const filter = (predicate, collection) => {
    const result = [];

    for(let item of collection) {
        if (predicate(item)) {
            result.push(item);
        }
    }

    return result;
}

const bornAfter1955  = item => item.born > 1955;
const r = people.filter(bornAfter1955);
console.log(r) 