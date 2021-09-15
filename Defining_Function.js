

// Function Declaration
function compute(x,y) {
    return x + y;
}

console.log(compute(2,5));


//Function Invocation
function add(x,y) {
    return x + y;
}

const a = add(5, 6, 7, 5);
const b = new add();
const c = add.call(null, 1, 2, 3);
const d = add.apply(null, [3, 2, 3]);

console.log(a);
console.log(b);
console.log(c);
console.log(d);



//Function Expression
/* Anonymous Function Expression*/
const multiply = function(x, y) {
    return x * y;
}
const e = multiply(3, 5);
console.log(e);

/* Named Function Expression*/
const divide = function calculate(x, y) {
    return x / y;
}
const f = divide(21, 3);
console.log(f);

/* Immediately Invoked Function Expression (IIFE)*/
const g = (function(x,y) {
    return x-y;
})(6,5);

console.log(g);


//Arrow Function
const h = (x,y) => x + y;

console.log(h(8,6));