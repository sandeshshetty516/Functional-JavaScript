//Referential Transparency
//Expression

const expression1 = 1 + 2;
const expression2 = expression1 + 20;
const expression3 = (1 * (2 + 3)) * expression1 + 20;

//Side Effects

const compute = (x, y) => {
    const r = x + y;
    console.log(r);
    return r;
}

/*Setters */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    changeAge(value) {
        this.age = value;
    }
}

const p = new Person("Sandesh", 21);
p.changeAge(21);
console.log(p);



//Pure Function
const greet = (name) => `Hello, ${name}`;

console.log(greet("Sandesh"));

//slice & splice
/*slice*/
const arr = [0,1,2,3,4,5];
const r = arr.slice(2,5);
console.log(r);

/*splice */
arr.splice(0,2);
arr.splice(0,1);
console.log(arr);

//Memoization
const sum = (a,b) => a + b;
console.log(sum(2,7));
console.log(sum(2,7));

const cache = {
    '2, 7' : 9
}