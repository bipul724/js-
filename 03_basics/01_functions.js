function sayMyName(){
    console.log("B");
    console.log("I");
    console.log("P");
    console.log("U");
    console.log("L");
}

//sayMyName();

function addTwoNumbers(num1,num2){
    return num1+num2;
    
}
const result = addTwoNumbers(3,4);
//console.log("Result : ",result);

function loginUserMessage(username="sam"){
    if(!username){
        console.log("Please enter a valid username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("Bipul"));


function calculateCartPrice(val1,val2,...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username : "Bipul",
    price : 99,
}

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObjects({
    username:"sam",
    price : 89,
});

let newArr = [100,200,300,400];

function returnValue(Arr){
    return Arr[1];
}

console.log(returnValue(newArr));