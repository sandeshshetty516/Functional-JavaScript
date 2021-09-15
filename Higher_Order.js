//Passing Functions as Input
const profile = fn => {
    console.log(`Start at ${Date()}`)
    const r = fn(2,3);
    console.log(`Computing: ${r}`)
    console.log(`End at ${Date()}`)
}
const compute = (x,y) => x + y;

profile(compute);

//Returning Function as Output

const p = fun => {
    return (...args) => {
        console.log(`Start at ${Date()}`)
        const rs = fun(...args);
        console.log(`Computing: ${rs}`)
        console.log(`End at ${Date()}`)
    }
}
const add = (x,y) => x + y;

p(add)(3,6);



//Creating Abstraction with Functions
const isLargerThan = value => {
    return (number) => {
        return number > value;
    }
}

const isLargerThan10 = isLargerThan(10)
const isLargerThan100 = isLargerThan(100)

const a = isLargerThan100(99);
const b = isLargerThan10(15);

console.log(a);
console.log(b);



//Sorting Numbers
const arr = [11,2,3,5,22,10];
const numericalOrder = (x, y) => x - y;
console.log(arr.sort(numericalOrder))


//Predicates (True or False)
/*
const isEmpty = ...
const isNull = ...
const haskey = ...
*/

const numberP = value => !isNaN(value) && isFinite(value);

console.log(numberP("a"));
console.log(numberP(3));
