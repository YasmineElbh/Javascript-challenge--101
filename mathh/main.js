let x = 3.99;

x = Math.round(x);//4 ==> returns the nearest integer
x = Math.floor(x);//3 ==> returns the value x rounded down to its nearest
x = Math.ceil(x);//4 ==> returns the value x rouned up to its nearest
x = Math.pow(x,2);//15.92010000 ==> return the value x to the power
x = Math.sqrt(x);//1.9974 ==> return he square
x = Math.abs(x);//3.99 ==> returns the abbsolute(positive) value of x

console.log(x);

let a = 5;
let b = 9;
let maxi,mini;
maxi = Math.max(x,a,b);
mini = Math.min(x,a,b);
console.log(maxi);
console.log(mini);
