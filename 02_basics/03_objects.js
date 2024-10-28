let JsUser = {
    location : "dehradun",
    'full name' : "bipul",
    email : "bipul@gmail.com", 
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"]);


// JsUser.email = "bipulchamoli@gmail.com"
// Object.freeze(JsUser)
// JsUser.email = "bipul@gmail.com"
// console.log(JsUser["email"])

JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser.greeting());