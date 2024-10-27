const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const hundred = 100000000;
console.log(hundred.toLocaleString('en-IN'));


console.log(Math.abs(-76));
console.log(Math.round(4.3))
console.log(Math.round(4.8))
console.log(Math.ceil(4.1))
console.log(Math.floor(4.9))
console.log(Math.min(4,5,6,8))
console.log(Math.min(2,3,9,4,5))


console.log(Math.random());

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max-min+1))+min)