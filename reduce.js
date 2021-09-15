//Home-Grown Reduce

const reduce = (func, intialValue, collection) => {
    let stored = intialValue;
    for (let element of collection) {
        stored = func(stored, element);
    }

    return stored;
}

//Adding Numbers
const numbers = [10,20,30,40];
const add = (stored, current) => stored + current;
const r = reduce(add, 0, numbers);

console.log(r);

console.log(numbers.reduce(add, 0));

//Adding Numbers Extracted from Objects

const entities = [
    { number: 10},
    { number: 20},
    { number: 30},
];

const sum = (stored, current) => stored + current.number;

console.log(entities.reduce(sum, 0));

//Flattening Arrays

const arr = [[0,1], [2,3], [4,5]];

const flatten = (stored, current) => stored.concat(current);

const res = arr.reduce(flatten, []);

console.log(res)


//Longest Array

const slices = [
    [1,2,3],
    [2,3,3,4,3,5],
    [2,4],
    [1],
    [2,3,2,2]
];

const longest = (stored, current) => {
    if(stored.length > current.length) {
        return stored;
    }
    else {
        return current;
    }
}

const result = slices.reduce(longest, []);
console.log(result);



//Example
const people = [
    { id: 1, name: 'Donald Knuth', born: 1938 },
    { id: 2, name: 'Vin Cerf', born: 1943 },
    { id: 3, name: 'Hal Abelson', born: 1947 },
    { id: 4, name: 'Alan Turning', born: 1912 },
    { id: 5, name: 'John von Neumann', born: 1903 },
    { id: 6, name: 'Thomas H. Cormen', born:1956 },
    { id: 7, name: 'Peter Norvig', born: 1956 },
    { id: 8, name: 'Jon Bentley', born: 1953 },
    { id: 9, name: 'Grady Booch', born: 1955 },
    { id: 10, name: 'Randal Bryant', born: 1952 },
];

const byId = (stored, current) => ({ ...stored, [current.id]: current })

const peopleById = people.reduce(byId, {});
console.log(peopleById);



//One Reduce Traversal, Multiple Operation
//Shortest and Longest

const array = [
    [1,2,3],
    [2,3,3,4,3,5],
    [2,4],
    [1],
    [2,3,2,2]
];

const long = (stored, current) => (stored.length > current.length) ? stored : current;
const short = (stored, current) => (stored.length > current.length) ? current : stored;

const initialValue = {
    short: null,
    long: [],
}

const longestAndShortest = (stored, current) => {
    const currentShortest = stored.short ? stored.short.length : Number.MAX_VALUE;

    return {
        short: (currentShortest > current.length) ? current : stored.short,
        long: (stored.long.length > current.length) ? stored.long : current
    }
}

console.log(array.reduce(longestAndShortest, initialValue));

